import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarbonFootprintModule } from './carbon-footprint.module'; // ajuste se o caminho for outro

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/carbon_footprint'),
    CarbonFootprintModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
