import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entity/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'latte',
      brand: 'starbucks',
      flavors: ['sweet', 'bitter'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((coffee) => coffee.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee of ${id} is not found`);
    }
    return coffee;
  }

  create(createCoffeeDto) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updatedCoffee) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //update
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
