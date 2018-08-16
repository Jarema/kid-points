import { Injectable, Inject } from '@nestjs/common';
import { Kid } from './interfaces/kid.interface';
import { Model } from 'mongoose';
import { CreateKidDto } from './dto/create-kid.dto';

@Injectable()
export class KidsService {
  constructor(
    @Inject('KidModelToken')
    private readonly kidModel: Model<Kid>
  ) {}

  async create(createKidDto: CreateKidDto) {
    const createdKid = new this.kidModel(createKidDto);
    return await createdKid.save();
  }

  async findAll(): Promise<Kid[]> {
    return await this.kidModel.find().exec()
  }

  async delete(id: string) {
    return await this.kidModel.deleteOne(id)
  }
}