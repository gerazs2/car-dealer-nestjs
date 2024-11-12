import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //solo deja la data que se esta esperando
      forbidNonWhitelisted: true,//Configuracion para detectar si un valor no va en DTO
    }),//se agrega configuracion de pipes a nivel aplicativo 
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
