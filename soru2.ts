// Soru 2: Type Guards ('in' operatörü)
interface Car {
  kind: "car";
  seatCount: number;
}
interface Truck {
  kind: "truck";
  payloadKg: number;
}
type Vehicle = Car | Truck;

export function useVehicle(v: Vehicle): string {
  if ("payloadKg" in v) {
    return `Truck loaded: ${v.payloadKg}kg`;
  } else {
    return `Car seats: ${v.seatCount}`;
  }
}

// Demo
const car: Car = { kind: "car", seatCount: 5 };
const truck: Truck = { kind: "truck", payloadKg: 1200 };
console.log("Soru2:", useVehicle(car), "|", useVehicle(truck));
