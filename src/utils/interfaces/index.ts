export interface Activity {
  id: string;
  title: string;
  description: string;
  location: string;
  cost: number;
  imageLink: string;
  category: 'history_and_culture' | 'adventure' | 'landscape';
}
