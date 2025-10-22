export interface PredefinedVacationProps {
  id: string;
  link: string;
  translationKey: string;
  activities: { id: string }[];
  dailyOrganization: {
    id: string;
    translationKey: string;
    images: { link: string; alt: string }[];
  }[];
}

export const challengeAndHedonism: PredefinedVacationProps = {
  id: 'challenge_and_hedonism',
  translationKey: 'organizedVacations.challenge_and_hedonism',
  link: '/predefined-vacations/challenge-and-hedonism-adventure-vacation',
  activities: [
    { id: 'ovcarsko_kablarska_klisura' },
    { id: 'zlatibor_gondola' },
    { id: 'cycling_tara' },
    { id: 'nc_tara' },
    { id: 'kayaking_drina' },
  ],
  dailyOrganization: [
    {
      id: 'challenge_and_hedonism_day_one',
      translationKey: 'day_one',
      images: [
        {
          link: '/activities/landscape/ovcarsko_kablarska_klisura/ovcarsko-kablarska-klisura-2.jpg',
          alt: 'Ovcarsko kablarska klisura 2',
        },
        {
          link: '/activities/landscape/ovcarsko_kablarska_klisura/ovcarsko-kablarska-klisura-4.jpg',
          alt: 'Ovcarsko kablarska klisura 4',
        },
      ],
    },
    {
      id: 'challenge_and_hedonism_day_two',
      translationKey: 'day_two',
      images: [
        {
          link: '/activities/landscape/zlatibor_gondola/zlatibor-gondola-1.jpg',
          alt: 'Gondola zlatibor 1',
        },
        {
          link: '/activities/landscape/zlatibor_gondola/zlatibor-gondola-2.jpg',
          alt: 'Gondola zlatibor 2',
        },
        {
          link: '/activities/adventure/quad_bike/zlatibor/quad-bike-zlatibor-1.jpg',
          alt: 'Quad bike zlatibor 1',
        },
        {
          link: '/activities/adventure/quad_bike/zlatibor/quad-bike-zlatibor-2.jpg',
          alt: 'Quad bike zlatibor 2',
        },
      ],
    },
    {
      id: 'challenge_and_hedonism_day_three',
      translationKey: 'day_three',
      images: [
        {
          link: '/activities/adventure/cycling/tara/mountain-biking-tara-1.jpg',
          alt: 'Mountain Biking on Tara',
        },
        {
          link: '/activities/adventure/cycling/tara/mountain-biking-tara-2.jpg',
          alt: 'Mountain Biking on Tara 2',
        },
        {
          link: '/activities/adventure/cycling/tara/mountain-biking-tara-3.jpg',
          alt: 'Mountain Biking on Tara 3',
        },
      ],
    },
    {
      id: 'challenge_and_hedonism_day_four',
      translationKey: 'day_four',
      images: [
        {
          link: '/activities/landscape/nc_tara/nacionalni-park-tara-1.jpg',
          alt: 'Tara National Park',
        },
        {
          link: '/activities/landscape/nc_tara/nacionalni-park-tara-2.jpg',
          alt: 'Tara National Park 2',
        },
        {
          link: '/activities/landscape/nc_tara/nacionalni-park-tara-3.jpg',
          alt: 'Tara National Park 3',
        },
      ],
    },
    {
      id: 'challenge_and_hedonism_day_five',
      translationKey: 'day_five',
      images: [
        {
          link: '/activities/adventure/kayaking/drina/kayak-drina-1.jpg',
          alt: 'Drina Kayak Adventure',
        },
        {
          link: '/activities/adventure/kayaking/drina/kayak-drina-2.jpg',
          alt: 'Drina Kayak Adventure 2',
        },
        {
          link: '/activities/adventure/kayaking/drina/kayak-drina-3.jpg',
          alt: 'Drina Kayak Adventure 3',
        },
      ],
    },
    {
      id: 'challenge_and_hedonism_day_six',
      translationKey: 'day_six',
      images: [
        {
          link: '/main-banner/sunset-on-the-road.jpg',
          alt: 'Sunset on the road',
        },
      ],
    },
  ],
};

export const pathwayFromAncientIimes: PredefinedVacationProps = {
  id: 'from_ancient_to_modern_history',
  translationKey: 'organizedVacations.from_ancient_to_modern_history',
  link: '/predefined-vacations/from-ancient-to-modern-history',
  activities: [
    { id: 'kalemegdan_fortress' },
    { id: 'muzej_nikola_tesla' },
    { id: 'st_sava_temple_belgrade' },
    { id: 'smederevo_fortress' },
    { id: 'viminacium' },
    { id: 'golubac_fortress_medieval_stronghold' },
    { id: 'tumane_monastery' },
    { id: 'lepenski_vir' },
    { id: 'rajkova_pecina' },
    { id: 'cruise_djerdap' },
    { id: 'winery_aleksandrovic_topola' },
  ],
  dailyOrganization: [
    {
      id: 'from_ancient_to_modern_history_day_one',
      translationKey: 'day_one',
      images: [
        {
          link: '/activities/history_and_culture/tvrdjava/kalemegdan/kalemegdan-1.jpg',
          alt: 'Kalemegdan Fortress',
        },
        {
          link: '/activities/history_and_culture/muzej/muzej_nikola_tesla/muzej-nikole-tesle-1.jpg',
          alt: 'Nikola Tesla museum 1',
        },
        {
          link: '/activities/history_and_culture/verski_objekat/hram_svetog_save/hram-svetog-save-1.jpg',
          alt: 'Hram svetog Save 1',
        },
      ],
    },
    {
      id: 'from_ancient_to_modern_history_day_two',
      translationKey: 'day_two',
      images: [
        {
          link: '/activities/history_and_culture/viminicijum/viminacium-2.jpg',
          alt: 'Viminacium ancient roman city 2',
        },
        {
          link: '/activities/history_and_culture/tvrdjava/smederevska_tvrdjava/smederevska-tvrdjava-1.jpg',
          alt: 'Smederevo Fortress',
        },
        {
          link: '/activities/history_and_culture/viminicijum/viminacium-1.jpg',
          alt: 'Viminacium ancient roman city',
        },
      ],
    },
    {
      id: 'from_ancient_to_modern_history_day_three',
      translationKey: 'day_three',
      images: [
        {
          link: '/activities/history_and_culture/tvrdjava/golubac/golubac-fortress-1.jpg',
          alt: 'Golubac Fortress',
        },
        {
          link: '/activities/history_and_culture/tvrdjava/golubac/golubac-fortress-inside.jpg',
          alt: 'Golubac Fortress 2',
        },
        {
          link: '/activities/history_and_culture/tvrdjava/golubac/golubac-fortress-old-suits.jpg',
          alt: 'Golubac Fortress 3',
        },
        {
          link: '/activities/history_and_culture/verski_objekat/manastir_tumane/manastir-tumane-1.jpg',
          alt: 'Manastir Tumane 1',
        },
      ],
    },
    {
      id: 'from_ancient_to_modern_history_day_four',
      translationKey: 'day_four',
      images: [
        {
          link: '/activities/history_and_culture/lepenski_vir/lepenski-vir-1.jpg',
          alt: 'Lepenski Vir Archaeological Site',
        },
        {
          link: '/activities/history_and_culture/lepenski_vir/lepenski-vir-2.jpg',
          alt: 'Lepenski Vir Archaeological Site 2',
        },
        {
          link: '/activities/landscape/cave/rajkova_pecina/rajkova-pecina-1.jpg',
          alt: 'Rajkova Cave',
        },
        {
          link: '/activities/landscape/cave/rajkova_pecina/rajkova-pecina-2.jpg',
          alt: 'Rajkova Cave 2',
        },
      ],
    },
    {
      id: 'from_ancient_to_modern_history_day_five',
      translationKey: 'day_five',
      images: [
        {
          link: '/activities/landscape/cruise/djerdap_cruise/djerdap-river-cruise-1.jpg',
          alt: 'Đerdap river cruise',
        },
        {
          link: '/activities/landscape/cruise/djerdap_cruise/djerdap-river-1.jpg',
          alt: 'Đerdap River 1',
        },
        {
          link: '/activities/landscape/cruise/djerdap_cruise/djerdap-river-2.jpg',
          alt: 'Đerdap River 2',
        },
      ],
    },
    {
      id: 'from_ancient_to_modern_history_day_six',
      translationKey: 'day_six',
      images: [
        {
          link: '/activities/relaxation_and_flavors/vinarija/aleksandrovic_topola/aleksandrovic-vinarija-1.jpg',
          alt: 'Winery Topola 1',
        },
        {
          link: '/activities/relaxation_and_flavors/vinarija/aleksandrovic_topola/aleksandrovic-vinarija-2.jpg',
          alt: 'Winery Topola 2',
        },
        {
          link: '/activities/relaxation_and_flavors/vinarija/aleksandrovic_topola/aleksandrovic-vinarija-3.jpg',
          alt: 'Winery Topola 3',
        },
      ],
    },
  ],
};

export const localCultureAndLandscapes: PredefinedVacationProps = {
  id: 'exploring_local_culture_and_landscapes',
  translationKey: 'organizedVacations.exploring_local_culture_and_landscapes',
  link: '/predefined-vacations/exploring-local-culture-and-landscapes',
  activities: [
    { id: 'nc_tara' },
    { id: 'horse_riding_tara' },
    { id: 'drvengrad_traditional_village' },
    { id: 'rural_retreat_in_northern_montenegro' },
    { id: 'maglic_fortress' },
  ],
  dailyOrganization: [
    {
      id: 'exploring_local_culture_and_landscapes_day_one',
      translationKey: 'day_one',
      images: [
        {
          link: '/activities/landscape/nc_tara/nacionalni-park-tara-1.jpg',
          alt: 'Tara National Park',
        },
        {
          link: '/activities/landscape/nc_tara/nacionalni-park-tara-2.jpg',
          alt: 'Tara National Park 2',
        },
        {
          link: '/activities/landscape/nc_tara/nacionalni-park-tara-3.jpg',
          alt: 'Tara National Park 3',
        },
      ],
    },
    {
      id: 'exploring_local_culture_and_landscapes_day_two',
      translationKey: 'day_two',
      images: [
        {
          link: '/activities/adventure/horse_riding/tara/horse-riding-on-tara-mountain-1.jpg',
          alt: 'horse riding on Tara mountain',
        },
        {
          link: '/activities/adventure/horse_riding/tara/horse-riding-on-tara-mountain-2.jpg',
          alt: 'horse riding on Tara mountain 2',
        },
        {
          link: '/activities/adventure/horse_riding/tara/horse-riding-on-tara-mountain-3.jpg',
          alt: 'horse riding on Tara mountain 3',
        },
      ],
    },
    {
      id: 'exploring_local_culture_and_landscapes_day_three',
      translationKey: 'day_three',
      images: [
        {
          link: '/activities/history_and_culture/drvengrad/drvengrad-1.jpg',
          alt: 'Drvengrad traditional village',
        },
        {
          link: '/activities/history_and_culture/drvengrad/drvengrad-2.jpg',
          alt: 'Drvengrad traditional village 2',
        },
        {
          link: '/activities/history_and_culture/drvengrad/drvengrad-voz-1.jpg',
          alt: 'Drvengrad traditional village 3',
        },
      ],
    },
    {
      id: 'exploring_local_culture_and_landscapes_day_four',
      translationKey: 'day_four',
      images: [
        {
          link: '/activities/relaxation_and_flavors/selo/kastratovic/seosko-domacinstvo-u-crnoj-gori-1.jpg',
          alt: 'Rural retreat northern Montenegro',
        },
        {
          link: '/activities/relaxation_and_flavors/selo/kastratovic/seosko-domacinstvo-u-crnoj-gori-2.jpg',
          alt: 'Rural retreat northern Montenegro 2',
        },
        {
          link: '/activities/relaxation_and_flavors/selo/kastratovic/seosko-domacinstvo-u-crnoj-gori-3.jpg',
          alt: 'Rural retreat northern Montenegro 2',
        },
      ],
    },
    {
      id: 'exploring_local_culture_and_landscapes_day_five',
      translationKey: 'day_five',
      images: [
        {
          link: '/activities/landscape/planina_lokve/planina-lokve-1.jpg',
          alt: 'Planina Lokve Montenegro',
        },
        {
          link: '/activities/landscape/planina_lokve/planina-lokve-2.jpg',
          alt: 'Planina Lokve Montenegro 2',
        },
        {
          link: '/activities/landscape/planina_lokve/planina-lokve-3.jpg',
          alt: 'Planina Lokve Montenegro 3',
        },
      ],
    },
    {
      id: 'exploring_local_culture_and_landscapes_day_six',
      translationKey: 'day_six',
      images: [
        {
          link: '/activities/landscape/planina_komovi/planina-komovi-1.jpg',
          alt: 'Planina Komovi Montenegro',
        },
        {
          link: '/activities/landscape/planina_komovi/planina-komovi-2.jpg',
          alt: 'Planina Komovi Montenegro 2',
        },
        {
          link: '/activities/landscape/planina_komovi/planina-komovi-3.jpg',
          alt: 'Planina Komovi Montenegro 3',
        },
      ],
    },
    {
      id: 'exploring_local_culture_and_landscapes_day_seven',
      translationKey: 'day_seven',
      images: [
        {
          link: '/activities/history_and_culture/tvrdjava/maglic/maglic-fortress-1.jpg',
          alt: 'Maglič Fortress',
        },
        {
          link: '/activities/history_and_culture/tvrdjava/maglic/maglic-fortress-2.jpg',
          alt: 'Maglič Fortress 2',
        },
        {
          link: '/activities/history_and_culture/tvrdjava/maglic/maglic-fortress-3.jpg',
          alt: 'Maglič Fortress 2',
        },
      ],
    },
  ],
};

export const pannonianPlain: PredefinedVacationProps = {
  id: 'pannonian_plain',
  translationKey: 'organizedVacations.pannonian_plain',
  link: '/predefined-vacations/heritage-of-the-pannonian-plain',
  activities: [
    { id: 'muzej_vazduhoplovstva' },
    { id: 'gardos_tower' },
    { id: 'sremski_karlovci' },
    { id: 'petrovaradin_fortress' },
    { id: 'nc_fruska_gora' },
    { id: 'winery_and_ethno_salas_zvonko_bogdan' },
  ],
  dailyOrganization: [
    {
      id: 'pannonian_plain_day_one',
      translationKey: 'day_one',
      images: [
        {
          link: '/activities/history_and_culture/tvrdjava/gardos/gardos-zemun-1.jpg',
          alt: 'Gardos zemun',
        },
        {
          link: '/activities/history_and_culture/muzej/muzej_vazduhoplovstva/muzej-vazduhoplovstva-1.jpg',
          alt: 'Museum of Aviation Belgrade 1',
        },
      ],
    },
    {
      id: 'pannonian_plain_day_two',
      translationKey: 'day_two',
      images: [
        {
          link: '/activities/history_and_culture/sremski_karlovci/sremski-karlovci-1.jpg',
          alt: 'Sremski Karlovci',
        },
        {
          link: '/activities/history_and_culture/sremski_karlovci/sremski-karlovci-3.jpg',
          alt: 'Sremski Karlovci 3',
        },
        {
          link: '/activities/history_and_culture/tvrdjava/petrovaradin/petrovaradin-1.jpg',
          alt: 'Petrovaradin Fortress',
        },
      ],
    },
    {
      id: 'pannonian_plain_day_three',
      translationKey: 'day_three',
      images: [
        {
          link: '/activities/landscape/nc_fruska_gora/nacionalni-park-fruska-gora-1.jpg',
          alt: 'Fruška Gora National Park',
        },
        {
          link: '/activities/landscape/nc_fruska_gora/nacionalni-park-fruska-gora-2.jpg',
          alt: 'Fruška Gora National Park 2',
        },
        {
          link: '/activities/relaxation_and_flavors/spa/fruske_terme/fruske-terme-1.jpg',
          alt: 'Fruške Terme spa 1',
        },
        {
          link: '/activities/relaxation_and_flavors/spa/fruske_terme/fruske-terme-2.jpg',
          alt: 'Fruške Terme spa 2',
        },
      ],
    },
    {
      id: 'pannonian_plain_day_four',
      translationKey: 'day_four',
      images: [
        {
          link: '/activities/relaxation_and_flavors/vinarija/zvonko_bogdan_subotica/vinarija-zvonko-bogdan-1.jpg',
          alt: 'Winery ethno salaš Zvonko Bogdan 1',
        },
        {
          link: '/activities/relaxation_and_flavors/vinarija/zvonko_bogdan_subotica/vinarija-zvonko-bogdan-2.jpg',
          alt: 'Winery ethno salaš Zvonko Bogdan 2',
        },
        {
          link: '/activities/relaxation_and_flavors/vinarija/zvonko_bogdan_subotica/vinarija-zvonko-bogdan-3.jpg',
          alt: 'Winery ethno salaš Zvonko Bogdan 3',
        },
      ],
    },
    {
      id: 'pannonian_plain_day_five',
      translationKey: 'day_five',
      images: [
        {
          link: '/activities/landscape/palicko_jezero/palicko-jezero-3.jpg',
          alt: 'Palicko jezero 3',
        },
        {
          link: '/activities/landscape/palicko_jezero/palicko-jezero-2.jpg',
          alt: 'Palicko jezero 2',
        },
      ],
    },
  ],
};

export const organizedVacations = [
  { ...challengeAndHedonism },
  { ...pannonianPlain },
  {
    ...pathwayFromAncientIimes,
  },
  {
    ...localCultureAndLandscapes,
  },
];
