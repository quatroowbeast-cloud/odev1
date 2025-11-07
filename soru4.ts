// Soru 4: keyof ile Jenerik Fonksiyon
export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Demo
const user4 = { id: 1, name: "Ada", active: true };
console.log("Soru4:", getProperty(user4, "name"), getProperty(user4, "active"));
