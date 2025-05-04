import { Injectable } from '@nestjs/common';
import { CarbonFootprintEntryRepository } from '@domain/repositories/carbon-footprint-entry.repository';
import { CarbonFootprintEntry } from '@domain/entities/carbon-footprint-entry.entity';

@Injectable()
export class GetCarbonFootprintHistoryUseCase {
  constructor(
    private readonly repository: CarbonFootprintEntryRepository,
  ) {}

  async execute(userId: string): Promise<CarbonFootprintEntry[]> {
    return this.repository.findByUserId(userId);
  }
}
