export interface Activity {
  id: string;
  title: string;
  description: string;
  longDescritpion: string[];
  location: string;
  locationValue?: string;
  cost: number;
  images: { link: string; alt: string }[];
  durationInDays: number;
  category: 'History & culture' | 'Adventure' | 'Landscape';
  categoryValue: 'history_and_culture' | 'adventure' | 'landscape';
  subCategory: string;
}

export interface AlertsProps {
  severity: 'success' | 'info' | 'warning' | 'error';
  message: string;
  timeout: number;
}
