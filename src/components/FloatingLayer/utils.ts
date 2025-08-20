export function groupByFour<T>(arr: T[]): T[][] {
  return arr.reduce(
    (acc: T[][], curr: T) => {
      if (acc[acc.length - 1]?.length === 4) {
        acc.push([curr]);
      } else {
        acc[acc.length - 1]?.push(curr);
      }
      return acc;
    },
    [[]]
  );
}
