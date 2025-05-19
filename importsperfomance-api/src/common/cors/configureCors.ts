import * as dotenv from 'dotenv';
import { INestApplication } from '@nestjs/common';

export function configureCors(app: INestApplication): void {
  dotenv.config();

  app.enableCors({
    credentials: true,
    origin: process.env.FRONT_URL || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
}
