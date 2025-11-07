// Soru 10: Static özellik ve metod
export class MathHelper {
  static PI = 3.14159;
  static calculateCircumference(r: number): number {
    return 2 * MathHelper.PI * r;
  }
}

// Demo
console.log("Soru10:", MathHelper.calculateCircumference(5).toFixed(3));
