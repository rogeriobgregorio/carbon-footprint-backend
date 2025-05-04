import { Schema } from 'mongoose';

export const CarbonFootprintEntrySchema = new Schema(
  {
    userId: { type: String, required: true },
    transportation: {
      mode: String,
      distancePerWeek: Number,
      fuelType: String,
    },
    energy: {
      kwhPerMonth: Number,
    },
    food: {
      meatFrequency: String,
      dairyFrequency: String,
    },
    consumption: {
      clothingPerMonth: Number,
      electronicsPerYear: Number,
      flightsPerYear: Number,
    },
    calculatedEmission: Number,
    createdAt: { type: Date, default: Date.now },
  },
  { collection: 'carbon_footprint_entries' },
);
