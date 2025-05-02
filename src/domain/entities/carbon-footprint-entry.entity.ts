import { TransportationData } from '../value-objects/transportation-data.vo';
import { EnergyData } from '../value-objects/energy-data.vo';
import { FoodData } from '../value-objects/food-data.vo';
import { ConsumptionData } from '../value-objects/consumption-data.vo';

export class CarbonFootprintEntry {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly transportation: TransportationData,
    public readonly energy: EnergyData,
    public readonly food: FoodData,
    public readonly consumption: ConsumptionData,
    public readonly calculatedEmission: number, // Em kgCO₂
    public readonly createdAt: Date,
  ) {}
}