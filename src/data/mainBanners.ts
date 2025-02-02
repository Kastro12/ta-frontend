export interface MainBannersProps {
  id: string;
  title: string;
  description: string;
  button: { title: string; link: string };
  image: {
    link: string;
    alt: string;
  };
}

const mainBanners: MainBannersProps[] = [
  {
    id: 'createVacationID',
    title: 'Create your dream vacation',
    description: 'Choose the activities and let us organize the rest',
    button: {
      title: 'Create vacation',
      link: '/create-vacation',
    },
    image: {
      link: '/main-banner/road_through_colorful_forest.webp',
      alt: 'Road through colorful forest',
    },
  },
];

export default mainBanners;
