export interface ServiceItem {
  id: string;
  title: string;
  category: 'mechanical' | 'diagnostics' | 'tires' | 'maintenance';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  estimatedTime: string;
  iconName: string;
  isPopular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  authorBadge?: string;
  rating: number;
  date: string;
  text: string;
  servicesMentioned?: string[];
  likesCount?: number;
  isGoogleVerified?: boolean;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: 'exterior' | 'shop' | 'repairs';
  caption: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
  isOpenToday?: boolean;
}

export interface AppointmentBooking {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
