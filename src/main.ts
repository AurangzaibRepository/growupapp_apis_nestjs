import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { KeyAuthMiddleware } from './middlewares/key-auth.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Global middlewares
  app.use(KeyAuthMiddleware);

  await app.listen(configService.get<number>('app.port', 8000)); // Can be (APP_PORT) from .env file
}
bootstrap();
