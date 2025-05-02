export class ConsumptionData {
  constructor(
    public readonly clothingPerMonth: number,
    public readonly electronicsPerYear: number,
    public readonly flightsPerYear: number,
  ) {
    if (this.clothingPerMonth < 0 || this.electronicsPerYear < 0 || this.flightsPerYear < 0) {
      throw new Error('Valores não podem ser negativos');
    }
  }
}