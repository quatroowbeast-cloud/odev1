// Soru 15: PickByValueType<T, V>
export type PickByValueType<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K]
};

// Demo
type T15 = { id: number; name: string; active: boolean; score: number };
type OnlyNumber15 = PickByValueType<T15, number>; // id, score
const t15: OnlyNumber15 = { id: 1, score: 100 };
console.log("Soru15:", t15);
