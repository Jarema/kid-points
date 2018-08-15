import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';

async function bootstrap() {
  console.log("test: ", process.env.TEST_ENV)
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
