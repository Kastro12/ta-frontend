import { ReactSelectOptions } from '@/forms/form.interface';

interface activityCategories extends ReactSelectOptions {
  description: string;
  link: string;
  images: { link: string; alt: string }[];
}

const activityCategories: activityCategories[] = [
  {
    id: '1',
    value: 'adventure',
    label: 'Adventure',
    description:
      'The Adventure category offers thrilling activities like rugged mountain trails, pristine river navigation, and cycling through stunning landscapes. These adventures challenge your endurance and connect you with Serbia’s most captivating environments. Ideal for thrill-seekers and outdoor enthusiasts, these experiences promise unforgettable memories and a deep sense of accomplishment.',
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
    label: 'Landscape',
    description:
      'Explore Serbia’s majestic natural wonders, from dramatic canyons and lush parks to tranquil lakes and rolling hills. Perfect for relaxation, exploration, and photography, each destination offers breathtaking scenery. Whether hiking through forests, admiring mountain views, or strolling along riverbanks, these landscapes promise a deep connection with nature and an enriching experience. Ideal for nature lovers and scenic enthusiasts.',
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
    label: 'History & culture',
    description:
      "Immerse yourself in Serbia's rich history through ancient fortresses, archaeological sites, and historical landmarks. The History and Culture category invites you to explore past civilizations, medieval strongholds, and regional traditions. Perfect for history enthusiasts and culture seekers, these journeys promise to deepen your understanding and appreciation of Serbia’s storied past.",
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
    label: 'Relaxation & flavors',
    description:
      'Indulge in serenity and exquisite tastes with our Relaxation & Flavors category. From luxurious spas and traditional wineries to local delicacies at ethno farms, these experiences nourish body and soul. Perfect for those seeking tranquility and a deep connection with local culture, it’s a soothing escape into Serbia’s most relaxing and flavorful spots.',
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
