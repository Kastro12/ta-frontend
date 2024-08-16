import { Activity } from '@/utils/interfaces';

const adventure: Activity[] = [
  {
    id: 'adventure-rafting-tara',
    title: 'Rafting on the Tara River',
    description:
      'Embark on an exhilarating rafting adventure on the Tara River, one of the most stunning rivers in the Balkans. Experience the thrill of navigating through breathtaking canyons, surrounded by untouched nature.',
    longDescritpion: [
      'Rafting on the Tara River, often called the "Tear of Europe," is an adventure that combines the thrill of rapids with breathtaking natural beauty. Flowing through Europe\'s deepest canyon, the river offers both serene stretches for enjoying the stunning landscapes and exciting rapids that cater to different skill levels.',
      'Most tours cover 18 to 25 kilometers, passing by towering cliffs, dense forests, and cascading waterfalls. With rapids classified as Class III to IV, the experience is thrilling yet safe, guided by professionals who provide all necessary equipment.',
      'After the adventure, you can unwind by the river, savor a traditional meal, and take in the pristine surroundings. Rafting on the Tara River is not just about excitement; it’s a chance to connect with nature in one of Europe’s most unspoiled environments.',
      "Perfect for a weekend getaway or a highlight of your Balkan tour, this is an experience you'll cherish.",
    ],
    location: 'Tara',
    locationValue: 'tara',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/rafting/tara_river/rafting_tara_1.jpg',
        alt: 'rafting on the Tara river',
      },
      {
        link: '/activities/adventure/rafting/tara_river/rafting_tara_2.jpg',
        alt: 'rafting on the Tara river 2',
      },
      {
        link: '/activities/adventure/rafting/tara_river/rafting_tara_3.jpg',
        alt: 'rafting on the Tara river 3',
      },
    ],
    durationInDays: 3,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'Rafting',
  },
];

const allActivities: Activity[] = [...adventure];

export default allActivities;
