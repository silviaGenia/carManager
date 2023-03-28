import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCarDTO, UpdateCarDTO } from 'src/dto/car.dto';
import { Car } from 'src/entity/Car';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) { }

  @Get()
  async getCarByColor(@Query('color') color) {
    return this.carService.getCarByColor(color);
  }
  @Get()
  async getCars(): Promise<Car[]> {
    return this.carService.getAllCars();
  }
  @Get(':id')
  async getOneCar(@Param('id') id: number): Promise<Car> {
    return this.carService.getCarById(id);
  }
  @Post()
  async postCar(@Body() request: CreateCarDTO) {
    return this.carService.postCar(request);
  }
  @Delete(':id')
  async deleteCar(@Param('id') uuid: string) {
    return this.carService.deleteCarById(uuid);
  }
  @Put(':id')
  async updateCar(@Param('id') id: number, @Body() request: UpdateCarDTO) {
    return this.carService.putCarById(id, request);
  }
}
