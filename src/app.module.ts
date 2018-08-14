import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { KidsController } from 'kids/kids.controller';

@Module({
  imports: [],
  controllers: [AppController, KidsController],
  providers: [AppService],
})
export class AppModule {}
