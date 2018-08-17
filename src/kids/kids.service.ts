import { Injectable, Inject } from '@nestjs/common';
import { Kid } from './interfaces/kid.interface';
import { Model } from 'mongoose';
import { CreateKidDto } from './dto/create-kid.dto';
import { UpdateKidPointsDto } from './dto/update-kid-points.dto';

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
    return await this.kidModel.deleteOne({_id: id})
  }

  async updatePoints(id: string, kid: UpdateKidPointsDto) {
    const kidToUpdate = await this.kidModel.findById(id);
    const historyElement = { reason: kid.reason, points: kid.points }
    return await this.kidModel.update({_id: id}, 
      { $set: { 
        points: kidToUpdate.points + kid.points, 
        history: kidToUpdate.history.push(historyElement) 
      }});
  }
}