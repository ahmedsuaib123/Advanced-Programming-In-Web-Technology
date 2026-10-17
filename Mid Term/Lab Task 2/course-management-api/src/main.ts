import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // converts types, e.g. "3" to 3
      whitelist: true, // removes fields not in the DTO
      forbidNonWhitelisted: true, // errors on unknown fields
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();