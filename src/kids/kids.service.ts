import { Injectable } from '@nestjs/common';
import { Kid } from './interfaces/kid.interface';

@Injectable()
export class KidsService {
  private readonly cats: Kid[] = [];

  create(cat: Kid) {
    this.cats.push(cat);
  }

  findAll(): Kid[] {
    return this.cats;
  }
}