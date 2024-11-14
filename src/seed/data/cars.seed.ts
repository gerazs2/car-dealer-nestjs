import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [  
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Rav-4',
      color: 'Grey',
      vin: 'MXh0QYXBNVNwudS96',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
      color: 'Blue',
      vin: 'jbbNaWTSgeAh4cqgM',
    },
    {
      id: uuid(),
      brand: 'Seat',
      model: 'Ibiza',
      color: 'Red',
      vin: 'm3iqiNzMg7C8gQ6vY',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Type-r',
      color: 'White',
      vin: 'pL63B7RxTbVwAvRJD',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'F-150',
      color: 'Green',
      vin: 'Bewzvw5E7yNihvdkq',
    }
    ];