export class FoodData {
  constructor(
    public readonly meatFrequency: 'daily' | 'weekly' | 'rarely' | 'never',
    public readonly dairyFrequency: 'daily' | 'weekly' | 'rarely' | 'never',
  ) {}
}