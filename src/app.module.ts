import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [ChatGateway],
  exports: [],
})
export class AppModule {}
