import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'toyota',
    //   createdAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const self = this;
    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime(),
    };
    self.brands.push(brand);
    return brand;
  }

  findAll() {
    const self = this;
    return self.brands;
  }

  findOne(id: string) {
    const self = this;
    const brand = self.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Breand with id: ${id} not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const self = this;
    let brandDB = self.findOne(id);

    self.brands = self.brands.map(brand => {
      if(brand.id === id){
        brand.updatedAt = new Date().getTime();
        brandDB = {...brandDB,...updateBrandDto}
        return brandDB;
      }
      return brand;
    });
  
  }

  remove(id: string) {
    const self = this;
    self.brands = self.brands.filter(brand => brand.id !== id);
  }
  public fillBrandsWithSeedData(brands: Brand[]){
    const self = this;
    self.brands = brands;
  }
}
