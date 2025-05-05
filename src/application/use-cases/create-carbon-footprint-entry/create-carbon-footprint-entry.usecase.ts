import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CreateCarbonFootprintEntryDTO } from './create-carbon-footprint-entry.dto';
import { CarbonFootprintEntry } from '@domain/entities/carbon-footprint-entry.entity';
import { CarbonFootprintEntryRepository } from '@domain/repositories/carbon-footprint-entry.repository';

import { CarbonCalculationService } from '@domain/services/carbon-calculation/carbon-calculation.service';

@Injectable()
export class CreateCarbonFootprintEntryUseCase {
  constructor(
    private readonly repository: CarbonFootprintEntryRepository,
    private readonly calculator: CarbonCalculationService,
  ) {}

  async execute(dto: CreateCarbonFootprintEntryDTO): Promise<void> {
    const emission = this.calculator.calculateTotal({
      transportation: dto.transportation,
      energy: dto.energy,
      food: dto.food,
      consumption: dto.consumption,
    });

    const entry = new CarbonFootprintEntry(
      randomUUID(),
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
}
