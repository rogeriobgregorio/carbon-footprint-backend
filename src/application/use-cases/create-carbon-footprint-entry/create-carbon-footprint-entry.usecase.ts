import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CreateCarbonFootprintEntryDTO } from './create-carbon-footprint-entry.dto';
import { CarbonFootprintEntry } from '@domain/entities/carbon-footprint-entry.entity';
import { CarbonFootprintEntryRepository } from '@domain/repositories/carbon-footprint-entry.repository';

import { TransportationData } from '@domain/value-objects/transportation-data.vo';
import { EnergyData } from '@domain/value-objects/energy-data.vo';
import { FoodData } from '@domain/value-objects/food-data.vo';
import { ConsumptionData } from '@domain/value-objects/consumption-data.vo';

@Injectable()
export class CreateCarbonFootprintEntryUseCase {
  constructor(private readonly repository: CarbonFootprintEntryRepository) {}

  async execute(dto: CreateCarbonFootprintEntryDTO): Promise<void> {
    const emission = this.calculate(dto);

    const entry = new CarbonFootprintEntry(
      randomUUID(), // id
      dto.userId,
      dto.transportation,
      dto.energy,
      dto.food,
      dto.consumption,
      emission,
      new Date(),
    );

    await this.repository.save(entry);
  }

  private calculate(dto: CreateCarbonFootprintEntryDTO): number {
    const transportEmission = this.calculateTransportEmission(
      dto.transportation,
    );
    const energyEmission = this.calculateEnergyEmission(dto.energy);
    const foodEmission = this.calculateFoodEmission(dto.food);
    const consumptionEmission = this.calculateConsumptionEmission(
      dto.consumption,
    );

    return (
      transportEmission + energyEmission + foodEmission + consumptionEmission
    );
  }

  private calculateTransportEmission(data: TransportationData): number {
    let carEmission = 0.05; // valor para elétrico

    if (data.fuelType === 'gasoline') {
      carEmission = 0.21;
    } else if (data.fuelType === 'diesel') {
      carEmission = 0.25;
    }

    const emissionFactors: Record<string, number> = {
      car: carEmission,
      bus: 0.1,
      train: 0.05,
      bike: 0,
      walk: 0,
    };

    const emissionPerKm = emissionFactors[data.mode] ?? 0;
    return data.distancePerWeek * emissionPerKm * 4; // 4 semanas
  }

  private calculateEnergyEmission(data: EnergyData): number {
    const CO2_PER_KWH = 0.233; // média global (em kg CO2 por kWh)
    return data.kwhPerMonth * CO2_PER_KWH;
  }

  private calculateFoodEmission(data: FoodData): number {
    const meatMap = {
      daily: 7,
      weekly: 3,
      rarely: 1,
      never: 0,
    };

    const dairyMap = {
      daily: 4,
      weekly: 2,
      rarely: 1,
      never: 0,
    };

    return meatMap[data.meatFrequency] + dairyMap[data.dairyFrequency];
  }

  private calculateConsumptionEmission(data: ConsumptionData): number {
    const CLOTHING_EMISSION_PER_ITEM = 25; // kg CO2
    const ELECTRONICS_EMISSION_PER_ITEM = 200; // kg CO2
    const FLIGHT_EMISSION_PER_TRIP = 250; // kg CO2

    return (
      data.clothingPerMonth * CLOTHING_EMISSION_PER_ITEM +
      (data.electronicsPerYear * ELECTRONICS_EMISSION_PER_ITEM) / 12 +
      (data.flightsPerYear * FLIGHT_EMISSION_PER_TRIP) / 12
    );
  }
}
