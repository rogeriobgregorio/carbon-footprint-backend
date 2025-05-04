import { CarbonFootprintEntryRepository } from '@domain/repositories/carbon-footprint-entry.repository';
import { TransportationData } from '@domain/value-objects/transportation-data.vo';
import { EnergyData } from '@domain/value-objects/energy-data.vo';
import { FoodData } from '@domain/value-objects/food-data.vo';
import { ConsumptionData } from '@domain/value-objects/consumption-data.vo';
import { CarbonFootprintEntry } from '@domain/entities/carbon-footprint-entry.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CarbonFootprintEntryMongoRepository
  implements CarbonFootprintEntryRepository
{
  constructor(
    @InjectModel('CarbonFootprintEntry')
    private readonly model: Model<any>,
  ) {}

  async save(entry: CarbonFootprintEntry): Promise<void> {
    const doc = new this.model({ ...entry });
    await doc.save();
  }

  async findByUserId(userId: string): Promise<CarbonFootprintEntry[]> {
    const docs = await this.model.find({ userId }).lean();

    return docs.map(
      (doc: any) =>
        new CarbonFootprintEntry(
          doc._id.toString(),
          doc.userId,
          new TransportationData(
            doc.transportation.mode,
            doc.transportation.distancePerWeek,
            doc.transportation.fuelType,
          ),
          new EnergyData(doc.energy.kwhPerMonth),
          new FoodData(doc.food.meatFrequency, doc.food.dairyFrequency),
          new ConsumptionData(
            doc.consumption.clothingPerMonth,
            doc.consumption.electronicsPerYear,
            doc.consumption.flightsPerYear,
          ),
          doc.calculatedEmission,
          new Date(doc.createdAt),
        ),
    );
  }
}
