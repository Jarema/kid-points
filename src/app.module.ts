import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { KidsController } from 'kids/kids.controller';
import { KidsService } from 'kids/kids.service';

@Module({
  imports: [],
  controllers: [AppController, KidsController],
  providers: [AppService, KidsService],
})
export class AppModule {}
