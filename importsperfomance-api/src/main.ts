import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureCors } from './common/cors/configureCors';
import { GlobalFilterException } from './common/filters/global.filter.exception';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  configureCors(app);
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new GlobalFilterException(httpAdapterHost));
  await app.listen(process.env.PORT ?? 5000);
}

void bootstrap();
