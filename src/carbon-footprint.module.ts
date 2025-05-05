import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarbonFootprintEntrySchema } from '@infra/repositories/schemas/carbon-footprint-entry.schema';
import { CarbonFootprintEntryMongoRepository } from '@infra/repositories/carbon-footprint-entry-mongo.repository';
import { CarbonFootprintEntryRepository } from '@domain/repositories/carbon-footprint-entry.repository';
import { CarbonFootprintController } from '@presentation/controllers/carbon-footprint.controller';
import { CreateCarbonFootprintEntryUseCase } from '@application/use-cases/create-carbon-footprint-entry/create-carbon-footprint-entry.usecase';
import { GetCarbonFootprintHistoryUseCase } from '@application/use-cases/get-carbon-footprint-history/get-carbon-footprint-history.usecase';
import { CarbonCalculationService } from '@domain/services/carbon-calculation/carbon-calculation.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CarbonFootprintEntry', schema: CarbonFootprintEntrySchema },
    ]),
  ],
  controllers: [CarbonFootprintController],
  providers: [
    {
      provide: CarbonFootprintEntryRepository,
      useClass: CarbonFootprintEntryMongoRepository,
    },
    CreateCarbonFootprintEntryUseCase,
    GetCarbonFootprintHistoryUseCase,
    CarbonCalculationService,
  ],
  exports: [CarbonFootprintEntryRepository],
})
export class CarbonFootprintModule {}
