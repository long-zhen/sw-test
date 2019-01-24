export function checkStressLevel({
  workHours = 0,
  sleepHours = 0,
  ageGroup = 0,
}) {
  const diff = Math.max(Math.abs(sleepHours - workHours), 1);

  return Math.min((diff + 10) * (ageGroup + 1), 100);
}
