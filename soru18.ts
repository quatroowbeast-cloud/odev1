// Soru 18: LastParameter<T>
export type LastParameter<T> =
  T extends (...args: [...infer _P, infer L]) => any ? L : never;

// Demo
type Fn18 = (a: number, b: string, c: Date) => void;
type L18 = LastParameter<Fn18>; // Date
const demo18: L18 = new Date();
console.log("Soru18:", demo18 instanceof Date);
