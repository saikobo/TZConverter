export const objectToQueryString = (obj: any): string =>
  new URLSearchParams(obj).toString();
