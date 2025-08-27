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

export const calculateAdherence = (history, shiftStartSec, shiftEndSec, allowances) => {
  if (!Array.isArray(history)) history = [];

  const totalShiftSecs = shiftEndSec - shiftStartSec;
  let totalGoodTime = 0;
  let totalPenalties = 0;
  const totals = {};

  history.forEach(({ status, startTime, endTime }) => {
    const duration = (endTime - startTime) / 1000;
    totals[status] = (totals[status] ?? 0) + duration;

    const startSec = startTime / 1000;
    const endSec = endTime / 1000;
    const insideShift = Math.max(0, Math.min(endSec, shiftEndSec) - Math.max(startSec, shiftStartSec));
    const outsideShift = duration - insideShift;

    if (status === "Available") {
      // Available is good **only inside shift**
      totalGoodTime += insideShift;
      // Logged out outside shift is allowed, so outside shift is penalized if Available is outside
      if (outsideShift > 0) totalPenalties += outsideShift;
    } 
    else if (status === "Break" || status === "Lunch") {
      const allowed = allowances[status] ?? duration;
      totalGoodTime += Math.min(duration, allowed); // only count up to allowed
      if (duration > allowed) totalPenalties += duration - allowed;
      // Break/Lunch outside shift reduces adherence
      if (outsideShift > 0) totalPenalties += outsideShift;
    } 
    else if (status === "Logged out") {
      // Good outside shift, bad inside shift
      if (insideShift > 0) totalPenalties += insideShift;
      else totalGoodTime += outsideShift; // good outside shift
    } 
    else {
      // Any other unexpected status, fully penalized
      totalPenalties += duration;
    }
  });

  // Also automatically count **Available as residual for shift gaps**
  // e.g., any part of shift not covered by Break, Lunch, or Logged out
  const coveredTime = Object.entries(totals).reduce((sum, [status, t]) => sum + t, 0);
  const residualAvailable = Math.max(0, totalShiftSecs - coveredTime);
  totalGoodTime += residualAvailable;

  // Final adherence %
  totalPenalties = Math.min(totalPenalties, totalShiftSecs);
  let adherencePct = ((totalGoodTime - totalPenalties) / totalShiftSecs) * 100;
  adherencePct = Math.max(0, Math.min(100, adherencePct));

  return { adherencePct, totals, totalPenalties, totalGoodTime };
};