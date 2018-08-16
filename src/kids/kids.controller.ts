import { Get, Post, Patch, Controller, Delete, Param, Body } from '@nestjs/common';
import { KidsService } from './kids.service';
import { CreateKidDto } from './dto/create-kid.dto';
import { Kid } from './interfaces/kid.interface';
import { UpdateKidPointsDto } from './dto/update-kid-points.dto';

@Controller('kids')
export class KidsController {
    constructor(private readonly kidsService: KidsService) {}

    @Get()
    async findAll(): Promise<Kid[]> {
        return this.kidsService.findAll();
    }

    @Post()
    async create(@Body() createKidDto: CreateKidDto) {
        this.kidsService.create(createKidDto);
    }

    @Delete(':id')
    async delete(@Param('id') id) {
        return this.kidsService.delete(id)
    }

    @Patch(':id')
    async updatePoints(@Param('id') id, @Body() updateKidPointsDto: UpdateKidPointsDto) {
        this.kidsService.updatePoints(id, updateKidPointsDto)
    }
}