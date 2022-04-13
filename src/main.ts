import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response.interceptor';
import { ApiKeyGuard } from './common/guards/api-key.guard';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    forbidNonWhitelisted: true, 
    transform: true,
    whitelist: true, 
    transformOptions: {
      enableImplicitConversion: true,
    },
 }));
 app.useGlobalFilters(new HttpExceptionFilter());
 app.useGlobalInterceptors(
  new WrapResponseInterceptor(), 
  new TimeoutInterceptor()
 );
  await app.listen(3000);
}
bootstrap();
