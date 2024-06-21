export interface Activity {
  id: string;
  title: string;
  description: string;
  location: string;
  locationName?: string;
  cost: number;
  imageLink: string;
  durationInDays: number;
  category: 'History and Culture' | 'Adventure' | 'Landscape';
}
