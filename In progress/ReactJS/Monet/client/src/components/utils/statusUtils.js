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

export const calculateAdherence = (history, shiftLengthSecs, allowances) => {
  // allowances is like: { Break: 1800, Lunch: 3600, Meeting: 7200 }

  // Sum up actual time spent
  const totals = {};
  history.forEach(({ status, startTime, endTime }) => {
    const duration = Math.floor((endTime - startTime) / 1000);
    totals[status] = (totals[status] ?? 0) + duration;
  });

  // Check adherence
  let over = [];
  for (const [status, allowed] of Object.entries(allowances)) {
    if ((totals[status] ?? 0) > allowed) {
      over.push({ status, allowed, actual: totals[status] });
    }
  }

  // Calculate adherence %
  const workedTime = shiftLengthSecs; // total shift length
  const usedTime = Object.entries(totals).reduce((acc, [status, t]) => {
    if (allowances[status]) return acc + Math.min(t, allowances[status]);
    return acc + t;
  }, 0);

  const adherencePct = Math.min(100, (usedTime / workedTime) * 100);

  return { adherencePct, over, totals };
};