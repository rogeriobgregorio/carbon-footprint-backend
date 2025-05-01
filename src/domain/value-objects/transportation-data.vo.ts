export class TransportationData {
  constructor(
    public readonly mode: 'car' | 'bus' | 'bike' | 'walk' | 'train',
    public readonly distancePerWeek: number,
    public readonly fuelType?: 'gasoline' | 'diesel' | 'electric',
  ) {
    if (this.distancePerWeek < 0) {
      throw new Error('Distância não pode ser negativa');
    }
  }
}