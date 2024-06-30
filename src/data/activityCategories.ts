import { ReactSelectOptions } from '@/forms/form.interface';

interface activityCategories extends ReactSelectOptions {
  description: string;
  link: string;
  images: { imgLink: string; alt: string }[];
}

const activityCategories: activityCategories[] = [
  {
    id: '1',
    value: 'adventure',
    label: 'Adventure',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    link: 'http://localhost:3000/activities?category=adventure',
    images: [
      {
        alt: 'First place',
        imgLink: 'https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg',
      },
      {
        alt: 'Second place',
        imgLink:
          'https://images.pexels.com/photos/20975683/pexels-photo-20975683/free-photo-of-a-black-and-white-photo-of-a-horse-jumping-over-an-obstacle.jpeg',
      },
      {
        alt: 'Third place',
        imgLink:
          'https://images.pexels.com/photos/21614980/pexels-photo-21614980/free-photo-of-street-photoshoot.jpeg',
      },
    ],
  },
  {
    id: '2',
    value: 'landscape',
    label: 'Landscape',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      link: 'http://localhost:3000/activities?category=landscape',
      images: [
      {
        alt: 'First place',
        imgLink: 'https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg',
      },
      {
        alt: 'Second place',
        imgLink:
          'https://images.pexels.com/photos/20975683/pexels-photo-20975683/free-photo-of-a-black-and-white-photo-of-a-horse-jumping-over-an-obstacle.jpeg',
      },
      {
        alt: 'Third place',
        imgLink:
          'https://images.pexels.com/photos/21614980/pexels-photo-21614980/free-photo-of-street-photoshoot.jpeg',
      },
    ],
  },
  {
    id: '3',
    value: 'history_and_culture',
    label: 'History & culture',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      link: 'http://localhost:3000/activities?category=history_and_culture',
      images: [
      {
        alt: 'First place',
        imgLink: 'https://i.ibb.co/k9XSMGr/full-shot-couple-near-car.jpg',
      },
      {
        alt: 'Second place',
        imgLink:
          'https://images.pexels.com/photos/20975683/pexels-photo-20975683/free-photo-of-a-black-and-white-photo-of-a-horse-jumping-over-an-obstacle.jpeg',
      },
      {
        alt: 'Third place',
        imgLink:
          'https://images.pexels.com/photos/21614980/pexels-photo-21614980/free-photo-of-street-photoshoot.jpeg',
      },
    ],
  },
];

export default activityCategories;
