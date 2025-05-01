export class EnergyData {
  constructor(public readonly kwhPerMonth: number) {
    if (this.kwhPerMonth < 0) {
      throw new Error('O consumo de energia não pode ser negativo');
    }
  }
}