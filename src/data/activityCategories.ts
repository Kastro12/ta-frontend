import { ReactSelectOptions } from '@/forms/form.interface';

interface activityCategories extends ReactSelectOptions {
  link: string;
  translationKey: string;
  images: { link: string; alt: string }[];
}

const activityCategories: activityCategories[] = [
  {
    id: '1',
    value: 'adventure',
    translationKey: 'categories.adventure',
    label: 'Adventure',
    link: '/create-vacation?category=adventure',
    images: [
      {
        alt: 'Canyoning nevidio',
        link: '/activities/adventure/canyoning/nevidio/canyoning-nevidio-1.jpg',
      },
      {
        alt: 'Kayak danube iron gate',
        link: '/activities/adventure/kayaking/danube_iron_gate/kayak-danube-iron-gate-1.jpg',
      },
      {
        alt: 'mountain biking on Tara',
        link: '/activities/adventure/cycling/tara/mountain-biking-tara-1.jpg',
      },
      {
        link: '/activities/adventure/quad_bike/zlatibor/quad-bike-zlatibor-1.jpg',
        alt: 'Quad Bike Adventure in Zlatibor 1',
      },
    ],
  },
  {
    id: '2',
    value: 'landscape',
    translationKey: 'categories.landscape',
    label: 'Landscape',
    link: '/create-vacation?category=landscape',
    images: [
      {
        alt: 'Nacionalni park tara',
        link: '/activities/landscape/nc_tara/nacionalni-park-tara-1.jpg',
      },
      {
        alt: 'Fruska gore nacionalni park',
        link: '/activities/landscape/nc_fruska_gora/nacionalni-park-fruska-gora-1.jpg',
      },
      {
        alt: 'Zlatibor gondola',
        link: '/activities/landscape/zlatibor_gondola/zlatibor-gondola-1.jpg',
      },
      {
        link: '/activities/landscape/nc_djerdap/nacionalni-park-djerdap-1.jpg',
        alt: 'Đerdap National Park 1',
      },
    ],
  },
  {
    id: '3',
    value: 'history_and_culture',
    translationKey: 'categories.history_and_culture',
    label: 'History & culture',
    link: '/create-vacation?category=history_and_culture',
    images: [
      {
        alt: 'Viminicijum',
        link: '/activities/history_and_culture/viminicijum/viminacium-1.jpg',
      },
      {
        link: '/activities/history_and_culture/verski_objekat/hram_svetog_save/hram-svetog-save-1.jpg',
        alt: 'Hram svetog Save 1',
      },
      {
        alt: 'Sremski karlovci',
        link: '/activities/history_and_culture/sremski_karlovci/sremski-karlovci-2.jpg',
      },
      {
        alt: 'Felix romuliana',
        link: '/activities/history_and_culture/tvrdjava/felix_romuliana/felix-romuliana-3.jpg',
      },
    ],
  },

  {
    id: '4',
    value: 'relaxation_and_flavors',
    translationKey: 'categories.relaxation_and_flavors',
    label: 'Relaxation & flavors',
    link: '/create-vacation?category=relaxation_and_flavors',
    images: [
      {
        alt: 'Aleksandrovic vinarija',
        link: '/activities/relaxation_and_flavors/vinarija/aleksandrovic_topola/aleksandrovic-vinarija-1.jpg',
      },
      {
        alt: 'grapes and croissants',
        link: '/accommodation-and-dining/grapes-and-croissants.jpg',
      },
      {
        alt: 'Fruske terme 1',
        link: '/activities/relaxation_and_flavors/spa/fruske_terme/fruske-terme-1.jpg',
      },
      {
        link: '/activities/relaxation_and_flavors/vinarija/zvonko_bogdan_subotica/vinarija-zvonko-bogdan-3.jpg',
        alt: 'Winery ethno salaš Zvonko Bogdan 3',
      },
    ],
  },
];

export default activityCategories;
