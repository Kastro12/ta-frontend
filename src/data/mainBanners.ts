export interface MainBannersProps {
  id: string;
  link: string;
  translationKey: string;
  image: {
    src: string;
    alt: string;
  };
}

const mainBanners: MainBannersProps[] = [
  {
    id: 'createVacationID',
    translationKey: 'homePage.mainBanners.createVacation',
    link: '/create-vacation',
    image: {
      src: '/main-banner/road_through_colorful_forest.webp',
      alt: 'Road through colorful forest',
    },
  },
];

export default mainBanners;
