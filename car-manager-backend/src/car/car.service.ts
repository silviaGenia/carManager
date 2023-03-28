import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/entity/Car';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) { }

  public async getAllCars(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  public async getCarById(id: number): Promise<Car> {
    const car = this.carsRepository.findOneBy({ id });
    if (!car) throw new Error('Car no encontrado');
    return car;
  }

  public async deleteCarById(uuid: string): Promise<void> {
    await this.carsRepository.delete(uuid);
  }

  public async postCar(car: Partial<Car>): Promise<Car> {
    return this.carsRepository.save(car);
  }

  public async putCarById(id: number, car: Partial<Car>) {
    const myCar = await this.getCarById(id);
    if (!myCar) throw new Error('Car no encontrado');
    myCar.name = car.name;
    myCar.model = car.model;
    myCar.color = car.color;
    myCar.description = car.description;

    return this.carsRepository.save(myCar);
  }

  public async getCarByColor(color: string): Promise<Car[]> {
    const cars = this.carsRepository.find({ where: { color } });
    return cars;
  }
}
