import { CarbonCalculatorStrategy } from './carbon-calculator.strategy';

export class ConsumptionCalculator implements CarbonCalculatorStrategy {
  calculate(input: {
    clothingPerMonth: number;
    electronicsPerYear: number;
    flightsPerYear: number;
  }): number {
    const CLOTHING_EMISSION_PER_ITEM = 25;
    const ELECTRONICS_EMISSION_PER_ITEM = 200;
    const FLIGHT_EMISSION_PER_TRIP = 250;

    return (
      input.clothingPerMonth * CLOTHING_EMISSION_PER_ITEM +
      (input.electronicsPerYear * ELECTRONICS_EMISSION_PER_ITEM) / 12 +
      (input.flightsPerYear * FLIGHT_EMISSION_PER_TRIP) / 12
    );
  }
}
