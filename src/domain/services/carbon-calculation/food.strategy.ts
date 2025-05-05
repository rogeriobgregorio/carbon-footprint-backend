import { CarbonCalculatorStrategy } from './carbon-calculator.strategy';

export class FoodCalculator implements CarbonCalculatorStrategy {
  calculate(input: {
    meatFrequency: 'daily' | 'weekly' | 'rarely' | 'never';
    dairyFrequency: 'daily' | 'weekly' | 'rarely' | 'never';
  }): number {
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

    return meatMap[input.meatFrequency] + dairyMap[input.dairyFrequency];
  }
}
