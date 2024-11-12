import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { error } from 'console';

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

  public create(createCarDto:CreateCarDto){
    const self = this;
    const car:Car  = {
      id: uuid(),
      brand: createCarDto.brand,
      model: createCarDto.model,
      color: createCarDto.color,
      vin: createCarDto.vin,
    };  

    this.cars.forEach(element => {
        if(element.vin === createCarDto.vin){
          throw new  HttpException(`Car with VIN: ${createCarDto.vin} alredy exsist`,500);
        }      
    });

    self.cars.push(car);
    
    return car;
  }
}
