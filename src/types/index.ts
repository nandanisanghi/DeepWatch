
export interface TravelPreference {
  budget: number;
  interests: string;
  duration: number;
  region: string;
}

export interface DailyItinerary {
  day: number;
  date: string;
  activities: Activity[];
  accommodation: Accommodation;
  meals: Meal[];
}

export interface Activity {
  time: string;
  name: string;
  description: string;
  location: Location;
  cost?: number;
}

export interface Accommodation {
  name: string;
  description: string;
  location: Location;
  pricePerNight: number;
  image?: string;
}

export interface Meal {
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  name: string;
  location?: Location;
  cost?: number;
}

export interface Location {
  name: string;
  address?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface PackingItem {
  category: string;
  items: string[];
}

export interface TravelPlan {
  id: string;
  destination: string;
  summary: string;
  totalCost: number;
  currency: string;
  itinerary: DailyItinerary[];
  packingList: PackingItem[];
  weatherInfo: string;
  createdAt: string;
  image?: string;
}
