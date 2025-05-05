import { CarbonCalculatorStrategy } from './carbon-calculator.strategy';

export class EnergyCalculator implements CarbonCalculatorStrategy {
  calculate(input: { kwhPerMonth: number }): number {
    const CO2_PER_KWH = 0.233;
    return input.kwhPerMonth * CO2_PER_KWH;
  }
}
