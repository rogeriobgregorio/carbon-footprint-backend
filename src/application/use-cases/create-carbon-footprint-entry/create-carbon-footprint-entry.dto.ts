import { TransportationData } from 'src/domain/value-objects/transportation-data.vo';
import { EnergyData } from 'src/domain/value-objects/energy-data.vo';
import { FoodData } from 'src/domain/value-objects/food-data.vo';
import { ConsumptionData } from 'src/domain/value-objects/consumption-data.vo';

export class CreateCarbonFootprintEntryDTO {
  userId: string;
  transportation: TransportationData;
  energy: EnergyData;
  food: FoodData;
  consumption: ConsumptionData;
}
