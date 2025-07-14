export interface Activity {
  paidAd: boolean;
  id: string;
  title: string;
  description: string;
  longDescritpion: string[];
  location: string;
  locationValue?: string;
  cost: number;
  images: { link: string; alt: string }[];
  durationInDays: number;
  category: 'History & culture' | 'Adventure' | 'Landscape' | 'Relaxation & flavors';
  categoryValue: 'history_and_culture' | 'adventure' | 'landscape' | 'relaxation_and_flavors';
  subCategory: string;
}

export interface AlertsProps {
  severity: 'success' | 'info' | 'warning' | 'error';
  message: string;
  timeout: number;
}
