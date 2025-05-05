import { TransportationCalculator } from './transportation.strategy';
import { EnergyCalculator } from './energy.strategy';
import { FoodCalculator } from './food.strategy';
import { ConsumptionCalculator } from './consumption.strategy';

export class CarbonCalculationService {
  private readonly transportation = new TransportationCalculator();
  private readonly energy = new EnergyCalculator();
  private readonly food = new FoodCalculator();
  private readonly consumption = new ConsumptionCalculator();

  calculateTotal(input: {
    transportation: any;
    energy: any;
    food: any;
    consumption: any;
  }): number {
    const transport = this.transportation.calculate(input.transportation);
    const energy = this.energy.calculate(input.energy);
    const food = this.food.calculate(input.food);
    const consumption = this.consumption.calculate(input.consumption);

    return transport + energy + food + consumption;
  }
}
