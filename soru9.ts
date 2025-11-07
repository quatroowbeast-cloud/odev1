// Soru 9: Soyut Sınıf (Abstract) ve Circle
abstract class Shape {
  abstract getArea(): number;
}

export class Circle extends Shape {
  constructor(public r: number) {
    super();
  }
  getArea(): number {
    return Math.PI * this.r * this.r;
  }
}

// Demo
console.log("Soru9:", new Circle(3).getArea().toFixed(2));
