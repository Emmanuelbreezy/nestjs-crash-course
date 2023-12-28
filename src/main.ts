import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as cors from 'cors';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  app.use(helmet());
  app.use(cors(corsOptions));

  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(8000);
}
bootstrap();
