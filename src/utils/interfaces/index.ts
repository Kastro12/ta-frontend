export interface Activity {
  id: string;
  title: string;
  description: string;
  location: string;
  locationValue?: string;
  cost: number;
  imageLink: string;
  durationInDays: number;
  category: 'History & culture' | 'Adventure' | 'Landscape';
  categoryValue: 'history_and_culture' | 'adventure' | 'landscape';
}
