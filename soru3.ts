// Soru 3: Sınıf ve Erişim Belirleyiciler (private tarihçe)
export class Logger {
  #logHistory: string[] = [];

  log(msg: string): void {
    const line = `[LOG] ${new Date().toISOString()} ${msg}`;
    this.#logHistory.push(line);
    console.log(line);
  }
  count(): number {
    return this.#logHistory.length;
  }
  // Dışarıya ham dizi vermemek için yalnızca kopyasını döndürelim
  history(): string[] {
    return [...this.#logHistory];
  }
}

// Demo
const logger = new Logger();
logger.log("Hello");
logger.log("World");
console.log("Soru3: count =", logger.count());
