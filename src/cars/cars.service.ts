import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Rav-4',
      color: 'Grey',
      vin:'MXh0QYXBNVNwudS96',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
      color: 'Blue',
      vin:'jbbNaWTSgeAh4cqgM',
    },
    {
      id: uuid(),
      brand: 'Seat',
      model: 'Ibiza',
      color: 'Red',
      vin:'m3iqiNzMg7C8gQ6vY',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Type-r',
      color: 'White',
      vin:'pL63B7RxTbVwAvRJD',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'F-150',
      color: 'Green',
      vin:'Bewzvw5E7yNihvdkq',
    },
  ];

  public findAll(){
    const self = this;
    return self.cars;
  }

  public findOneById(id:string){
    const self = this;
    const car = self.cars.find( car => car.id === id);
    console.log(car);

    if (!car) {
      throw new  NotFoundException(`Car with id: ${id} not found`);
    }

    return car;
  }
}
