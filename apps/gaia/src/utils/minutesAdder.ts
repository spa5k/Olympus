export const minutesAdder = (
  dt: { getTime: () => number },
  minutes: number
): Date => {
  return new Date(dt.getTime() + minutes * 60000);
};
