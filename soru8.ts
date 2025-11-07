// Soru 8: Rest Parametreleri (sum)
export function sum(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

// Demo
console.log("Soru8:", sum(1, 2, 3, 4, 5));
