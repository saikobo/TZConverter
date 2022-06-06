export const getMillisecondsInUTC = (): number => {
  let now = new Date();
  let utc_now = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds(),
    now.getUTCMilliseconds(),
  );
  return utc_now.getTime();
};

export const convertSecondsToMilliseconds = (s: number): number => s * 1000;
