import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.enableCors()
  // app.enableCors({
  //   origin: 'http://localhost:3001/',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   preflightContinue: true,
  //   optionsSuccessStatus: 200,
  // });

  // Si no pasa las validaciones, arroja error (instalar class-transformer)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
