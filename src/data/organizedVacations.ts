export interface PredefinedVacationProps {
  id: string;
  title: string;
  description: string;
  link: string;
  activities: { id: string }[];
  dailyOgranization: {
    id: string;
    title: string;
    description: string[];
    images: { link: string; alt: string }[];
  }[];
}

export const challengeAndHedonism: PredefinedVacationProps = {
  id: 'challenge_and_hedonism_adventure',
  title: 'Challenge and hedonism adventure',
  description:
    'Perfect for adventurers seeking both adrenaline and indulgence. Enjoy hiking, mountain biking, and other exciting activities.',
  link: '/predefined-vacations/challenge-and-hedonism-adventure-vacation',
  activities: [
    { id: 'landscape_ovcarsko_kablarska_klisura' },
    { id: 'landscape_zlatibor_gondola' },
    { id: 'cycling_tara' },
    { id: 'landscape_nc_tara' },
    { id: 'adventure-kayaking-drina' },
  ],
  dailyOgranization: [
    {
      id: 'challenge_and_hedonism_adventure_1',
      title: 'Day one',
      description: [
        'We depart from Belgrade to begin our adventure in the stunning Ovčar-Kablar Gorge.',
        "Enjoy a hike along mountain trails, where you'll be surrounded by untouched nature and breathtaking views.",
        "After a relaxing day in the great outdoors, we head to Zlatibor, where we'll spend the night in the heart of this mountain beauty.",
      ],

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
      id: 'challenge_and_hedonism_adventure_2',
      title: 'Day two',
      description: [
        'An exciting day awaits you in Zlatibor!',
        'Experience a gondola ride offering panoramic views of the mountain peaks, followed by an adrenaline-filled quad bike ride through mountain trails.',
        'We conclude the day in a spa center, where you can unwind and rejuvenate.',
      ],

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
      id: 'challenge_and_hedonism_adventure_3',
      title: 'Day three',

      description: [
        'We start the day with a trip to Tara National Park, one of the most beautiful places in Serbia.',
        'Get ready for a mountain biking adventure, where every part of the trail will surprise you with the natural beauty surrounding this mountain.',
      ],

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
      id: 'challenge_and_hedonism_adventure_4',
      title: 'Day four',
      description: [
        'Today, we explore Tara National Park.',
        'Take a walk through pristine nature and visit the most scenic viewpoints, offering majestic landscapes.',
        'This day is perfect for nature lovers and hikers.',
      ],
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
      id: 'challenge_and_hedonism_adventure_5',
      title: 'Day five',

      description: [
        'The day begins with kayaking on the crystal-clear Drina River. The feeling of freedom on the water, coupled with the beautiful scenery around you, will be a real treat for adventurers.',
        "We'll spend the night in the charming town of Bajina Bašta, where you'll enjoy peace and tranquility.",
      ],
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
      id: 'challenge_and_hedonism_adventure_6',
      title: 'Day six',
      description: [
        'The last day is reserved for our return to Belgrade, carrying with us a wealth of new memories and experiences from this unforgettable adventure through the natural wonders of Serbia.',
      ],
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
  title: 'From Ancient to Modern History',
  description:
    "Explore ancient ruins, medieval castles, and modern landmarks, experiencing the region's evolution from ancient times to today.",
  link: '/predefined-vacations/from-ancient-to-modern-history',
  activities: [
    { id: 'history_and_culture_kalemegdan' },
    { id: 'muzej_nikola_tesla' },
    { id: 'st_sava_temple_belgrade' },
    { id: 'history_and_culture_smederevo_fortress' },
    { id: 'history_and_culture_viminacium' },
    { id: 'history_and_culture_golubac_fortress_medieval_stronghold' },
    { id: 'tumane_monastery' },
    { id: 'history_and_culture_lepenski_vir' },
    { id: 'landscape_rajkova_pecina' },
    { id: 'cruise_djerdap' },
    { id: 'winery_aleksandrovic_topola' },
  ],
  dailyOgranization: [
    {
      id: 'from_ancient_to_modern_history_1',
      title: 'Day one',
      description: [
        'Our tour of Belgrade begins with a stroll through the magnificent Kalemegdan, where you’ll enjoy panoramic views of the confluence of the Sava and Danube rivers.',
        'Next, we’ll visit the Nikola Tesla Museum, where you’ll discover the innovations and achievements of one of history’s greatest minds.',
        'We conclude the day with a visit to the impressive St. Sava Temple, a dominant symbol of Orthodox Christianity on the Belgrade skyline.',
      ],
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
      id: 'from_ancient_to_modern_history_2',
      title: 'Day two',
      description: [
        'In the morning, we head to the Smederevo Fortress, one of the most beautiful medieval fortresses in Serbia, which holds stories of glorious times.',
        'After that, we continue to Viminacium, an ancient Roman city and military camp, where you’ll travel back to the era of Roman civilization.',
        "In the afternoon, we arrive in Golubac, where we’ll settle in and spend the night in this picturesque town on the Danube's banks.",
      ],
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
      id: 'from_ancient_to_modern_history_3',
      title: 'Day three',
      description: [
        'We begin the day with a visit to the Golubac Fortress, an impressive medieval structure guarding the Danube.',
        'After exploring this magnificent fortress, we continue to Tumane Monastery, a spiritual retreat nestled in peaceful nature, where a special sense of tranquility and energy pervades.',
      ],
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
      id: 'from_ancient_to_modern_history_4',
      title: 'Day four',
      description: [
        'Our journey continues with a visit to Lepenski Vir, one of the most significant archaeological sites from the prehistoric period. This site will bring you closer to the life of one of Europe’s oldest civilizations.',
        'Later, we explore the secrets of Rajko’s Cave, where you’ll marvel at the stunning cave formations sculpted by nature over the centuries.',
      ],
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
      id: 'from_ancient_to_modern_history_5',
      title: 'Day five',
      description: [
        'Today, enjoy a unique boat ride through the Đerdap Gorge, also known as the “Iron Gates,” where you’ll take in the untouched nature and towering cliffs surrounding the Danube. ',
        'This cruise offers a perfect opportunity to relax and capture the majestic landscapes with your camera.',
      ],
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
      id: 'from_ancient_to_modern_history_6',
      title: 'Day six',
      description: [
        ' Our final day begins in Topola, where we’ll visit one of the region’s renowned wineries. You’ll enjoy a tasting of premium wines, followed by an authentic lunch that will round off this unforgettable journey.',
        'Afterward, we return to Belgrade, enriched with new experiences and memories.',
      ],
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
  title: 'Exploring local culture and landscapes',
  description:
    'Immerse in vibrant local culture and breathtaking landscapes. Discover local life, traditions, and unique scenic views.',
  link: '/predefined-vacations/exploring-local-culture-and-landscapes',
  activities: [
    { id: 'landscape_nc_tara' },
    { id: 'horse_riding_tara' },
    { id: 'history_and_culture-drvengrad–traditional-village' },
    { id: 'rural-retreat-in-northern-montenegro' },
    { id: 'maglic-fortress' },
  ],
  dailyOgranization: [
    {
      id: 'exploring_local_culture_and_landscapes_1',
      title: 'Day one',
      description: [
        " Our adventure begins with a trip to Tara National Park, where you'll have the opportunity to admire the spectacular landscapes of this natural paradise. We’ll explore numerous viewpoints offering breathtaking views of dense forests, emerald-green rivers, and crystal-clear lakes.",
        'Tara is home to a rich variety of plant and animal life, and every step reveals a new beauty of this unique place.',
      ],
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
      id: 'exploring_local_culture_and_landscapes_2',
      title: 'Day two',
      description: [
        'Today is dedicated to exciting horseback riding through the beautiful terrain of Tara. This activity will allow you to connect with nature in a special way, enjoying the peace and tranquility of mountain trails.',
        'After riding, we will relax with a tasting of traditional regional cuisine, where you’ll have the chance to savor authentic dishes prepared using old recipes, giving you a true insight into local gastronomy.',
      ],
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
      id: 'exploring_local_culture_and_landscapes_3',
      title: 'Day three',
      description: [
        'Our exploration continues with a visit to Drvengrad, a charming ethno-village created by the famous director Emir Kusturica. This unique complex of wooden houses and museums offers a fascinating glimpse into traditional ways of life, while the atmosphere of the place makes the visit unforgettable. ',
        'Afterwards, we will enjoy a train ride through picturesque landscapes, providing you with the chance to relax and take in the natural beauty from the comfort of the train.',
      ],
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
      id: 'exploring_local_culture_and_landscapes_4',
      title: 'Day four',
      description: [
        'We travel to an ethno homestead in Montenegro, where you’ll have the chance to tour a farm and enjoy a tasting of organic food. This day offers a unique opportunity to learn about traditional agricultural practices and taste local specialties.',
        'After visiting the farm, we’ll explore local mountains and pastures, soaking up the atmosphere and learning about traditional life in this region.',
      ],
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
      id: 'exploring_local_culture_and_landscapes_5',
      title: 'Day five',
      description: [
        'During the summer, people migrated from villages to the mountains due to the abundance of food and water. Today, we will follow these historic paths to the mountains, where at the destination we will be greeted with a meal prepared using traditional recipes from the area.',
        'This day provides not only a physical challenge but also a culinary journey through authentic flavors and stories that make this region special.',
      ],
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
      id: 'exploring_local_culture_and_landscapes_6',
      title: 'Day six',
      description: [
        'Climbing Mount Komovi is a challenge for all nature and adventure enthusiasts. As you ascend this magnificent mountain, you will enjoy spectacular views of the surrounding landscape, feeling a deep connection with nature.',
        'The climb to Komovi offers a sense of achievement and unforgettable moments in a natural setting.',
      ],

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
      id: 'exploring_local_culture_and_landscapes_7',
      title: 'Day seven',
      description: [
        'At the end of our tour, we will visit the old town of Maglič, a historical site known for its rich cultural heritage and charming ruins. As we explore the remains of this once-important city, we will learn more about its significance and history.',
        'Afterward, we return to Belgrade, carrying beautiful memories of this unforgettable journey.',
      ],
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
  id: 'heritage_of_the_pannonian_plain',
  title: 'Heritage of the Pannonian Plain',
  description:
    'Discover the rich heritage of the Pannonian Plains, where history and tradition blend with serene landscapes.',
  link: '/predefined-vacations/heritage-of-the-pannonian-plain',
  activities: [
    { id: 'muzej_vazduhoplovstva' },
    { id: 'gardos_tower' },
    { id: 'history_and_culture_sremski_karlovci' },
    { id: 'history_and_culture_petrovaradin' },
    { id: 'landscape_nc_fruska_gora' },
    { id: 'winery_and_ethno_salas_zvonko_bogdan' },
  ],
  dailyOgranization: [
    {
      id: 'heritage_of_the_pannonian_plain_1',
      title: 'Day one',
      description: [
        "The Panonian tour begins with a visit to the Aviation Museum, where you'll uncover the fascinating history of aviation through a rich collection of aircraft and exhibits. ",
        'Next, we head to Zemun, where we’ll explore Gardoš, known for its medieval tower and stunning views of the Danube.',
        'Enjoy a stroll through the cobbled streets and the historical atmosphere.',
      ],
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
      id: 'heritage_of_the_pannonian_plain_2',
      title: 'Day two',
      description: [
        'Today takes us to Sremski Karlovci, a charming Baroque town renowned for its rich cultural heritage and famous wineries. We’ll explore historical landmarks, including the Karlovci Gymnasium and the Patriarchal Residence.',
        "After our visit to Karlovci, we continue to Petrovaradin, where we’ll discover the impressive Petrovaradin Fortress. From there, you'll have a breathtaking view of Novi Sad, and the fortress itself houses numerous galleries, museums, and cafes.",
      ],
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
      id: 'heritage_of_the_pannonian_plain_3',
      title: 'Day three',
      description: [
        'This day is dedicated to exploring Fruška Gora, one of Serbia’s most beautiful natural reserves. We’ll visit monasteries that have preserved the spiritual and cultural heritage of the region for centuries.',
        'After enjoying the natural beauty and cultural landmarks, we’ll relax in Fruške Terme in the evening. The thermal springs and spa treatments will provide perfect relaxation after an active day.',
      ],
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
      id: 'heritage_of_the_pannonian_plain_4',
      title: 'Day four',
      description: [
        'Today we head north to an ethno farm near Subotica, where you’ll experience the traditional Vojvodina lifestyle.',
        'Afterward, we’ll visit the renowned Zvonko Bogdan Winery, where you’ll have the opportunity to taste premium wines and learn about the rich winemaking tradition of the region. Enjoy the authentic atmosphere of the farm and the beautiful vineyard setting.',
      ],
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
      id: 'heritage_of_the_pannonian_plain_5',
      title: 'Day five',
      description: [
        'We will spend this day enjoying the peace of the lake, known for its clear water and picturesque landscapes.',
        'The area around the lake features promenades and parks ideal for relaxation, and Palić is also known for its historic villas and rich tourist offerings.',
        'Afterward, we return to Belgrade, carrying beautiful memories of this unforgettable journey.',
      ],
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
