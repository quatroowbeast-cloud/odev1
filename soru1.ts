// Soru 1: Jenerik Dizi Birleştirme
export function mergeArrays<T, U>(a: T[], b: U[]): Array<T | U> {
  return [...a, ...b];
}

// Demo
const ma1 = mergeArrays([1, 2, 3], ["a", "b"]);
console.log("Soru1:", ma1);
