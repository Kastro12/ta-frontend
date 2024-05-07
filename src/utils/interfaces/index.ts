export interface Activity {
  id: string;
  title: string;
  description: string;
  location: string;
  cost: number;
  imageLink: string;
  category: 'History and Culture' | 'Adventure' | 'Landscape';
}
