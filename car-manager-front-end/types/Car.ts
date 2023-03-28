export class Car {
  id!: string;
  name?: string;
  model?: string;
  color?: string;
  description?: string;
}
export class SaveCar {
  name!: string;
  model!: string;
  color!: string;
  description!: string;
}
export interface carProps {
  car: Car;
}
