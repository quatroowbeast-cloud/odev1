// Soru 6: Jenerik Sınıf Implementasyonu (MemoryCache)
export class MemoryCache<T> {
  private store = new Map<string, T>();

  set(key: string, value: T): void {
    this.store.set(key, value);
  }
  get(key: string): T | undefined {
    return this.store.get(key);
  }
  clear(): void {
    this.store.clear();
  }
}

// Demo
const cache6 = new MemoryCache<number>();
cache6.set("x", 42);
console.log("Soru6:", cache6.get("x"));
cache6.clear();
console.log("Soru6 after clear:", cache6.get("x"));
