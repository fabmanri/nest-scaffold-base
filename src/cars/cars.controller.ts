import { Controller, Get, Param } from '@nestjs/common';
import { Car } from './cars.models';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly CarsService: CarsService) {}
  @Get()
  getAllCars(): Car[] {
    return this.CarsService.findAll();
  }

  @Get(':id')
  CarById(@Param('id') id: string) {
    return this.CarsService.findById(Number(id));
  }
}
