import { Module } from '@nestjs/common';
import { KidsController } from './kids.controller';
import { KidsService } from './kids.service';
import { kidsProviders } from './kids.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [KidsService, ...kidsProviders],
  controllers: [KidsController]
})
export class KidsModule {}