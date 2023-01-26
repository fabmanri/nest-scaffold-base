import { Controller, Get, Param } from '@nestjs/common';
import { Car } from './cars.models';

@Controller('cars')
export class CarsController {
  private cars: Car = ['Toyota', 'Honda', 'Jeep'];
  @Get()
  getAllCars(): Car {
    return this.cars;
  }

  @Get(':id')
  CarById(@Param('id') id: string) {
    return this.cars[id];
  }
}
