// Soru 17: FilterUnion<T, U> (U'ya atanabilenleri çıkar)
export type FilterUnion<T, U> = T extends U ? never : T;

// Demo
type U17 = string | number | boolean;
type NoString17 = FilterUnion<U17, string>; // number | boolean
const a17: NoString17 = true;
console.log("Soru17:", a17);
