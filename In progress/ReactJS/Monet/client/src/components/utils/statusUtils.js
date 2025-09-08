const thresholds = {
  "Available": 14400,      // 4h
  "Break": 180,            // 3 min
  "Lunch": 3600,           // 1h
  "Meeting": 7200,         // 2h
  "System Issues - Tek": 1800,
  "System Issues - MS": 1800,
  "Training - Tek": 7200,
  "Training - MS": 7200,
  "Other Tek Activities": 3600,
  "End of shift": 0,
  "Logged out": 0,
}

export const getThreshold = (status) => thresholds[status] ?? null;

export const isOverLimit = (status, elapsed) => {
  const max = getThreshold(status);
  if (!max) return false; // No limit
  return elapsed > max;
}

export const timeRemaining = (status, elapsed) => {
  const max = getThreshold(status);
  if (!max) return null; // unlimited
  return Math.max(max - elapsed);
}

export function calculateAdherence(history, shiftStartSec, shiftEndSec, thresholds) {
  const totalShiftSeconds = shiftEndSec - shiftStartSec;
  let adherentSeconds = 0;

  for (const { status, startTime, endTime } of history) {
    const start = Math.max(startTime / 1000, shiftStartSec);
    const end = Math.min(endTime / 1000, shiftEndSec);
    if (end <= start) continue;

    const duration = end - start;
    const hour = new Date(startTime).getHours();
    const withinWorkHours = hour >= 9 && hour < 18;

    if (withinWorkHours) {
      // Shift hours: Available, Break, Lunch
      if (status === "Available") {
        adherentSeconds += duration;
      } else if (status === "Break" || status === "Lunch") {
        const limit = thresholds[status] || 0;
        adherentSeconds += Math.min(duration, limit);
      }
      // other statuses inside work hours → non-adherent
    } else {
      // Off hours: must be logged out
      if (!status || status === "Logged out") {
        adherentSeconds += duration;
      }
      // anything else → non-adherent
    }
  }

  const adherencePct =
    totalShiftSeconds > 0
      ? (adherentSeconds / totalShiftSeconds) * 100
      : 100;

  return { adherencePct };
}