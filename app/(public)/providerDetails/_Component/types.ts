export interface BusinessHour {
  day: string;
  start: string;
  end: string;
  isClosed: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface TimeSlot {
  date: string;
  time: string;
  available: boolean;
}

export interface ServiceProvider {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  startingPrice: number;
  category: string;
  description: string;
  experience: number;
  hires: number;
  teamSize: number;
  responseTime: string;
  businessHours: BusinessHour[];
  services: Service[];
  availability: TimeSlot[];
}
