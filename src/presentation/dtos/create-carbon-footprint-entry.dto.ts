export class CreateCarbonFootprintEntryDTO {
  userId: string;

  transportation: {
    mode: 'car' | 'bus' | 'bike' | 'walk' | 'train';
    distancePerWeek: number;
    fuelType?: 'gasoline' | 'diesel' | 'electric';
  };

  energy: {
    kwhPerMonth: number;
  };

  food: {
    meatFrequency: 'daily' | 'weekly' | 'rarely' | 'never';
    dairyFrequency: 'daily' | 'weekly' | 'rarely' | 'never';
  };

  consumption: {
    clothingPerMonth: number;
    electronicsPerYear: number;
    flightsPerYear: number;
  };
}
