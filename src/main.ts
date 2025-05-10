import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { KeyAuthMiddleware } from './middlewares/key-auth.middleware';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Global prefix
  app.setGlobalPrefix('api');

  // Cors (Cors and helmet should come before any app use call)
  app.enableCors({
    origin: configService.get<string>('auth.cors_origin'),
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  });

  app.use(helmet.frameguard({
    action: 'sameorigin'
  }));

  // Global middlewares
  app.use(KeyAuthMiddleware);

  // Apply global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      stopAtFirstError: true,
    }),
  );

  await app.listen(configService.get<number>('app.port', 8000)); // Can be (APP_PORT) from .env file
}
bootstrap();
