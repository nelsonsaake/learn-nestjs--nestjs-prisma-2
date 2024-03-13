import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WrapResponseInterceptor } from './commons/interceptors/WrapResponseInterceptor';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [DatabaseModule, ProductsModule, ReviewsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: WrapResponseInterceptor,
    },
  ],
})
export class AppModule { }
