import { CarbonFootprintEntry } from '@domain/entities/carbon-footprint-entry.entity';

export abstract class CarbonFootprintEntryRepository {
  abstract save(entry: CarbonFootprintEntry): Promise<void>;
  abstract findByUserId(userId: string): Promise<CarbonFootprintEntry[]>;
}
