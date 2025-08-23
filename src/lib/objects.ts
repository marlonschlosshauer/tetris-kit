// eslint-disable-next-line
export const zip = <T extends Record<string, any>>(
  a: Partial<T>,
  b: Partial<T>,
): T => {
  return Object.keys(a).reduce((acc, key) => {
    // @ts-expect-error Fix generic causing issues with access
    acc[key] = b[key] ?? a[key];
    return acc;
  }, {} as T);
};
