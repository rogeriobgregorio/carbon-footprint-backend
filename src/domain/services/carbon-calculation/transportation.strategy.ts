import { CarbonCalculatorStrategy } from './carbon-calculator.strategy';

export class TransportationCalculator implements CarbonCalculatorStrategy {
  calculate(input: {
    mode: string;
    distancePerWeek: number;
    fuelType?: string;
  }): number {
    let carEmission = 0.05;

    if (input.fuelType === 'gasoline') {
      carEmission = 0.21;
    } else if (input.fuelType === 'diesel') {
      carEmission = 0.25;
    }

    const emissionFactors: Record<string, number> = {
      car: carEmission,
      bus: 0.1,
      train: 0.05,
      bike: 0,
      walk: 0,
    };

    const emissionPerKm = emissionFactors[input.mode] ?? 0;
    return input.distancePerWeek * emissionPerKm * 4;
  }
}