import { Activity } from '@/utils/interfaces';

const museums: Activity[] = [
  {
    paidAd: true,
    id: 'muzej_nikola_tesla',
    translationKey: 'activities.history_and_culture.muzej_nikola_tesla',
    title: 'Nikola Tesla museum',
    description:
      'Discover the legacy of Nikola Tesla at the Nikola Tesla Museum in Belgrade, showcasing his personal belongings, inventions, and archives.',
    longDescritpion: [
      "The Nikola Tesla museum in Belgrade is a tribute to one of history's most brilliant minds. Situated in the city's heart, the museum showcases an extensive collection of Tesla’s belongings, including his original manuscripts, scientific instruments, and over 160,000 original documents.",
      "Visitors can explore interactive exhibits that highlight Tesla's groundbreaking contributions to electrical engineering, such as alternating current (AC) electricity, radio, and wireless energy transfer. The museum also offers insights into Tesla’s life, from his early years in Serbia to his impactful career in the United States, where he became a world-renowned inventor.",
    ],
    location: 'Belgrade',
    locationValue: 'belgrade',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/muzej/muzej_nikola_tesla/muzej-nikole-tesle-1.jpg',
        alt: 'Nikola Tesla museum 1',
      },
      {
        link: '/activities/history_and_culture/muzej/muzej_nikola_tesla/muzej-nikole-tesle-2.jpg',
        alt: 'Nikola Tesla museum 2',
      },
      {
        link: '/activities/history_and_culture/muzej/muzej_nikola_tesla/muzej-nikole-tesle-3.jpg',
        alt: 'Nikola Tesla museum 3',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: 'museum',
  },
  {
    paidAd: true,
    id: 'muzej_vazduhoplovstva',
    translationKey: 'activities.history_and_culture.muzej_vazduhoplovstva',
    title: 'Museum of Aviation',
    description:
      'Discover the history of aviation at the Museum of Aviation in Belgrade, featuring an extensive collection of aircraft and artifacts.',
    longDescritpion: [
      'The Museum of Aviation in Belgrade is one of the most significant aviation museums in the region, offering a comprehensive look at the history of flight through an extensive collection of aircraft, engines, and aviation memorabilia. Situated near Nikola Tesla Airport, the museum takes visitors on a fascinating journey through the evolution of aviation, from early flight attempts to the advancements of modern jet technology.',
      "The museum's collection features over 200 aircraft, including early gliders, propeller planes, military jets, and helicopters. Highlights include World War II fighters, Cold War-era aircraft, and parts of the B-2 stealth bomber wreckage, which was downed during the 1999 NATO bombing of Yugoslavia.",
      'Beyond the aircraft, the museum displays a variety of engines, flight instruments, and uniforms, offering a detailed exploration of aviation technology and its influence on both civilian and military flight.',
    ],
    location: 'Belgrade',
    locationValue: 'belgrade',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/muzej/muzej_vazduhoplovstva/muzej-vazduhoplovstva-1.jpg',
        alt: 'Museum of Aviation Belgrade 1',
      },
      {
        link: '/activities/history_and_culture/muzej/muzej_vazduhoplovstva/muzej-vazduhoplovstva-2.jpg',
        alt: 'Museum of Aviation Belgrade 2',
      },
      {
        link: '/activities/history_and_culture/muzej/muzej_vazduhoplovstva/muzej-vazduhoplovstva-3.jpg',
        alt: 'Museum of Aviation Belgrade 3',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: 'museum',
  },
];

const fortress: Activity[] = [
  {
    paidAd: true,
    id: 'gardos_tower',
    translationKey: 'activities.history_and_culture.gardos_tower',
    title: 'Gardoš Tower',
    description:
      'Visit Gardoš Tower, a historic landmark in Zemun, offering breathtaking views of the Danube River and the city of Belgrade.',
    longDescritpion: [
      'Gardoš Tower, also known as the Millennium Tower, is a striking landmark in the historic district of Zemun, Belgrade. Built in 1896 to commemorate a thousand years of Hungarian settlement in the Pannonian Basin, this iconic tower stands proudly atop Gardoš Hill, offering visitors breathtaking views of the Danube River, Zemun, and the distant Belgrade skyline.',
      "The tower's architecture is a unique blend of Romanesque, Gothic, and Renaissance styles, making it an architectural treasure in the region. Inside, visitors can climb the winding staircase to the observation deck, where they can take in the stunning vistas and experience the tower's grandeur up close.",
      'Beyond its architectural charm, Gardoš Tower is rich in history. The surrounding Gardoš Hill is a picturesque area with narrow streets, charming old houses, and a vibrant cultural scene. The neighborhood is home to art galleries, cafes, and restaurants, offering a delightful mix of history, culture, and relaxation.',
    ],
    location: 'Belgrade',
    locationValue: 'belgrade',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/tvrdjava/gardos/gardos-zemun-1.jpg',
        alt: 'Gardoš Tower 1',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/gardos/gardos-zemun-2.jpg',
        alt: 'Gardoš Tower 2',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: 'Fortress',
  },
  {
    paidAd: true,
    id: 'maglic_fortress',
    translationKey: 'activities.history_and_culture.maglic_fortress',
    title: 'Maglič Fortress',
    description:
      'Explore the historic Maglič Fortress, perched high above the Ibar River, offering stunning views and a journey through medieval history.',
    longDescritpion: [
      "Maglič Fortress, a well-preserved medieval stronghold, majestically overlooks the scenic Ibar River in central Serbia. Built in the 13th century, this fortress served as a strategic defense against invasions, standing as a guardian of the surrounding region. Its location in the 'Valley of Serbian Kings,' an area steeped in medieval Serbian history, further enhances its historical importance.",
      'Visitors to Maglič can explore its towering walls and well-preserved structures, including the central keep, churches, and former living quarters. The fortress provides breathtaking panoramic views of the Ibar River valley, making it a favorite spot for photography and a peaceful retreat into nature.',
      'The journey to the fortress is part of the adventure, involving a short hike through lush landscapes that enrich the overall experience.',
    ],
    location: 'Kraljevo',
    locationValue: 'kraljevo',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/tvrdjava/maglic/maglic_fortress-1.jpg',
        alt: 'Maglič Fortress 1',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/maglic/maglic_fortress-2.jpg',
        alt: 'Maglič Fortress 2',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/maglic/maglic_fortress-3.jpg',
        alt: 'Maglič Fortress 2',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: 'Fortress',
  },
  {
    paidAd: true,
    id: 'backa_tvrdjava',
    translationKey: 'activities.history_and_culture.backa_tvrdjava',
    title: 'Bačka Fortress',
    description:
      'Bačka Fortress offers a glimpse into medieval history with scenic river views and convenient parking nearby. Ideal for history enthusiasts and explorers.',
    longDescritpion: [
      "Bačka Fortress, located on the Danube River in northern Serbia, is a significant medieval fortification built in the 14th century. Its well-preserved towers and walls are a testament to the region's rich historical heritage.",
      "Easily accessible by road with parking near the entrance, visitors can explore the fortress's impressive towers, ramparts, and central courtyard. The site offers stunning views of the Danube River, making it ideal for history enthusiasts and photographers.",
    ],
    location: 'Bač',
    locationValue: 'bac',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/tvrdjava/backa_tvrdjava/backa-tvrdjava-bac-1.jpg',
        alt: 'Bačka Fortress – A Medieval Stronghold 1',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/backa_tvrdjava/backa-tvrdjava-bac-2.jpg',
        alt: 'Bačka Fortress – A Medieval Stronghold 2',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: '',
  },
  {
    paidAd: true,
    id: 'felix_romuliana',
    translationKey: 'activities.history_and_culture.felix_romuliana',
    title: 'Felix Romuliana imperial palace',
    description:
      "Felix Romuliana, a UNESCO World Heritage site, features impressive Roman ruins. With convenient parking nearby, it's perfect for history enthusiasts and archaeology lovers.",
    longDescritpion: [
      "Felix Romuliana, located in Gamzigrad near Zaječar, is one of Serbia's most significant Roman archaeological sites. Built in the late 3rd and early 4th centuries by Emperor Galerius, this UNESCO World Heritage site was dedicated to his mother, Romula, and himself. The well-preserved ruins, including walls, gates, and intricate mosaics, showcase the grandeur of Roman imperial architecture.",
      'Visitors can explore the palace, temples, and stunning mosaics depicting mythological scenes. Informative signs and guided tours provide historical insights into this ancient complex.',
    ],
    location: 'Zaječar',
    locationValue: 'zajecar',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/tvrdjava/felix_romuliana/felix-romuliana-1.jpg',
        alt: 'Felix Romuliana imperial palace 1',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/felix_romuliana/felix-romuliana-2.jpg',
        alt: 'Felix Romuliana imperial palace 2',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/felix_romuliana/felix-romuliana-3.jpg',
        alt: 'Felix Romuliana imperial palace 3',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: '',
  },
  {
    paidAd: true,
    id: 'golubac_fortress_medieval_stronghold',
    translationKey: 'activities.history_and_culture.golubac_fortress_medieval_stronghold',
    title: 'Golubac Fortress',
    description:
      'Golubac Fortress offers stunning views and rich history by the Danube. With parking nearby, it’s ideal for history enthusiasts and photographers.',
    longDescritpion: [
      'Golubac Fortress, perched on the Danube River in eastern Serbia, is a striking 14th-century medieval stronghold. It played a key role in controlling the river passage between Central Europe and the Balkans. The fortress’s impressive towers and walls offer breathtaking views of the Danube and the surrounding landscape.',
      'Visitors can explore the nine towers and ramparts. The visitor center provides historical exhibitions and multimedia presentations about the fortress’s significance.',
    ],
    location: 'Golubac',
    locationValue: 'golubac',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/tvrdjava/golubac/golubac-fortress-1.jpg',
        alt: 'Golubac Fortress 1',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/golubac/golubac-fortress-inside.jpg',
        alt: 'Golubac Fortress 2',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/golubac/golubac-fortress-old-suits.jpg',
        alt: 'Golubac Fortress 3',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: '',
  },
  {
    paidAd: true,
    id: 'kalemegdan_fortress',
    translationKey: 'activities.history_and_culture.kalemegdan_fortress',
    title: 'Kalemegdan Fortress',
    description:
      'Kalemegdan offers panoramic views and rich history in central Belgrade, making it an ideal spot for sightseeing and cultural exploration.',
    longDescritpion: [
      'Kalemegdan Fortress, at the confluence of the Sava and Danube rivers in Belgrade, is a historic landmark with over two millennia of history. Founded by the Celts and expanded by various empires, the fortress complex features ancient walls, military structures, museums, and monuments within Kalemegdan Park.',
      "Explore sections like the Despot's Tower, the Military Museum, and the Roman Well. The park offers scenic strolls, views of the rivers, and the Belgrade skyline. Nearby are art galleries, the Belgrade Zoo, and numerous cafés and restaurants.",
    ],
    location: 'Belgrade',
    locationValue: 'belgrade',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/tvrdjava/kalemegdan/kalemegdan-1.jpg',
        alt: 'Kalemegdan Fortress 1',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/kalemegdan/kalemegdan-2.jpg',
        alt: 'Kalemegdan Fortress 2',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/kalemegdan/kalemegdan-3.jpg',
        alt: 'Kalemegdan Fortress 3',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: '',
  },
  {
    paidAd: true,
    id: 'petrovaradin_fortress',
    translationKey: 'activities.history_and_culture.petrovaradin_fortress',
    title: 'Petrovaradin Fortress',
    description:
      'Petrovaradin Fortress offers expansive views and a rich history, making it an excellent destination for history enthusiasts and panoramic sightseeing.',
    longDescritpion: [
      "Petrovaradin Fortress, known as the 'Gibraltar on the Danube,' is a historic fortification in Novi Sad, Serbia. Built by the Austrians in the 17th and 18th centuries, it was vital in defending against Ottoman forces and remains one of Europe's best-preserved fortresses.",
      'Explore its extensive grounds, including the Clock Tower with panoramic views, and visit museums like the Museum of the City of Novi Sad and the Petrovaradin Fortress Museum for insights into its military history and architecture.',
    ],
    location: 'Novi Sad',
    locationValue: 'novi_sad',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/tvrdjava/petrovaradin/petrovaradin-1.jpg',
        alt: 'Petrovaradin Fortress 1',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/petrovaradin/petrovaradin-2.jpg',
        alt: 'Petrovaradin Fortress 2',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: '',
  },
  {
    paidAd: true,
    id: 'smederevo_fortress',
    translationKey: 'activities.history_and_culture.smederevo_fortress',
    title: 'Smederevo Fortress',
    description:
      'Smederevo Fortress offers expansive historical ruins and river views, providing a great experience for history enthusiasts and explorers.',
    longDescritpion: [
      'Smederevo Fortress, situated on the Danube River in Serbia, is one of the largest medieval fortresses in the Balkans. Built-in the 15th century by Despot Đurađ Branković, it was once the capital of the Serbian Despotate and features massive walls, towers, and a strategic location.',
      'Explore its vast grounds, including city walls, towers, and the central court, offering stunning views of the Danube and great photo opportunities. Guided tours provide historical insights.',
    ],
    location: 'Smederevo',
    locationValue: 'smederevo',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/tvrdjava/smederevska_tvrdjava/smederevska-tvrdjava-1.jpg',
        alt: 'Smederevo Fortress 1',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/smederevska_tvrdjava/smederevska-tvrdjava-2.jpg',
        alt: 'Smederevo Fortress 2',
      },
      {
        link: '/activities/history_and_culture/tvrdjava/smederevska_tvrdjava/smederevska-tvrdjava-3.jpg',
        alt: 'Smederevo Fortress 3',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: '',
  },
];

const history_and_culture: Activity[] = [
  {
    paidAd: true,
    id: 'drvengrad_traditional_village',
    translationKey: 'activities.history_and_culture.drvengrad_traditional_village',
    title: 'Drvengrad traditional village',
    description:
      'Drvengrad is a charming wooden village with rich cultural attractions, making it a great destination for film enthusiasts and cultural exploration.',
    longDescritpion: [
      'Drvengrad, also known as Küstendorf, is a unique ethno village on Mokra Gora in western Serbia, created by renowned film director Emir Kusturica for his film Life is a Miracle. This wooden village blends traditional Serbian architecture with a vibrant cultural scene, hosting the annual Küstendorf Film and Music Festival, which attracts global artists and visitors.',
      'Visitors can explore cobbled streets, admire wooden houses, and visit cultural venues like the cinema, art gallery, and workshops. Drvengrad also offers accommodation and dining options for a complete immersion in its artistic atmosphere.',
    ],
    location: 'Tara',
    locationValue: 'tara',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/drvengrad/drvengrad-1.jpg',
        alt: 'Drvengrad traditional village 1',
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
    durationInDays: 1,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: '',
  },

  {
    paidAd: true,
    id: 'lepenski_vir',
    translationKey: 'activities.history_and_culture.lepenski_vir',
    title: 'Lepenski Vir archaeological site',
    description:
      'Lepenski Vir is a prehistoric site with unique sculptures and a rich history, attracting archaeology enthusiasts and history buffs.',
    longDescritpion: [
      'Lepenski Vir, on the Danube River in eastern Serbia, is a crucial prehistoric site dating back to 9500–6000 BC. Known for its trapezoidal houses and stone sculptures, it offers insights into one of Europe’s earliest sedentary communities.',
      'The visitor center features well-preserved ruins and exhibits of artifacts and sculptures, providing an educational experience about the site’s historical significance.',
    ],
    location: 'Đerdap',
    locationValue: 'djerdap',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/lepenski_vir/lepenski-vir-1.jpg',
        alt: 'Lepenski Vir Archaeological Site 1',
      },
      {
        link: '/activities/history_and_culture/lepenski_vir/lepenski-vir-2.jpg',
        alt: 'Lepenski Vir Archaeological Site 2',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: '',
  },

  {
    paidAd: true,
    id: 'sremski_karlovci',
    translationKey: 'activities.history_and_culture.sremski_karlovci',
    title: 'Sremski Karlovci historic gem',
    description:
      'Sremski Karlovci offers historical landmarks and charming architecture, an excellent destination for cultural exploration and sightseeing.',
    longDescritpion: [
      'Sremski Karlovci, a charming town in northern Serbia near Novi Sad, is celebrated for its historical and cultural heritage. Once the seat of the Serbian Orthodox Church, it boasts Baroque and neoclassical architecture.',
      'Key sights include the Church of St. Nicholas with its exquisite frescoes, the historical Patriarch’s Residence, and the Karlovci Gymnasium, one of Serbia’s oldest secondary schools. Don’t miss the Four Lions Fountain, a symbol of the town’s prosperity.',
    ],
    location: 'Novi Sad',
    locationValue: 'novi_sad',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/sremski_karlovci/sremski-karlovci-1.jpg',
        alt: 'Sremski Karlovci 1',
      },
      {
        link: '/activities/history_and_culture/sremski_karlovci/sremski-karlovci-2.jpg',
        alt: 'Sremski Karlovci 2',
      },
      {
        link: '/activities/history_and_culture/sremski_karlovci/sremski-karlovci-3.jpg',
        alt: 'Sremski Karlovci 3',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: '',
  },

  {
    paidAd: true,
    id: 'viminacium',
    translationKey: 'activities.history_and_culture.viminacium',
    title: 'Viminacium ancient roman city',
    description:
      'Viminacium features extensive Roman ruins and artifacts, a fascinating destination for archaeology enthusiasts and history buffs.',
    longDescritpion: [
      'Viminacium, near Požarevac in eastern Serbia, is a prominent Roman archaeological site. Originally a military camp established in the 1st century AD, it became a thriving city and administrative center. The site features well-preserved ruins, including a Roman amphitheater, bathhouses, city walls, mosaic floors, frescoes, and various artifacts.',
      'The Viminacium archaeological park also showcases a reconstructed Roman villa and a necropolis with elaborate tombs, offering insights into Roman urban life and burial practices.',
    ],
    location: 'Požarevac',
    locationValue: 'pozarevac',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/viminicijum/viminacium-1.jpg',
        alt: 'Viminacium ancient roman city',
      },
      {
        link: '/activities/history_and_culture/viminicijum/viminacium-2.jpg',
        alt: 'Viminacium ancient roman city 2',
      },
      {
        link: '/activities/history_and_culture/viminicijum/viminacium-3.jpg',
        alt: 'Viminacium ancient roman city 3',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: '',
  },
];

const religious_objects: Activity[] = [
  {
    paidAd: true,
    id: 'st_sava_temple_belgrade',
    translationKey: 'activities.history_and_culture.st_sava_temple_belgrade',
    title: 'St. Sava Temple, Belgrade',
    description:
      'Visit the magnificent St. Sava Temple in Belgrade, one of the largest Orthodox churches in the world, and experience its stunning architecture and spiritual ambiance.',
    longDescritpion: [
      'The St. Sava Temple in Belgrade is a monumental symbol of Serbian Orthodoxy and one of the largest Orthodox churches globally. Dedicated to St. Sava, the founder of the Serbian Orthodox Church, this stunning temple is built on the site where the Ottomans burned his remains in 1595. The temple’s construction began in 1935, and despite interruptions due to wars and political changes, it continues to stand as an enduring symbol of faith and national identity.',
      "The temple's exterior is clad in white marble and granite, with a massive central dome that dominates the Belgrade skyline. The interior, still under decoration, features elaborate mosaics, some of the largest in the world, depicting scenes from the Bible and Orthodox Christian iconography. The temple also houses a crypt dedicated to the Serbian saints and a treasury with relics and artifacts from Serbian history.",
    ],
    location: 'Belgrade',
    locationValue: 'belgrade',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/verski_objekat/hram_svetog_save/hram-svetog-save-1.jpg',
        alt: 'Hram svetog Save 1',
      },
      {
        link: '/activities/history_and_culture/verski_objekat/hram_svetog_save/hram-svetog-save-2.jpg',
        alt: 'Hram svetog Save 2',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: 'Religious object',
  },

  {
    paidAd: true,
    id: 'tumane_monastery',
    translationKey: 'activities.history_and_culture.tumane_monastery',
    title: 'Tumane Monastery',
    description:
      'Experience the spiritual and historical significance of Tumane Monastery, a centuries-old sanctuary set in the serene landscape of eastern Serbia.',
    longDescritpion: [
      "Tumane Monastery, situated near Golubac in eastern Serbia, is a cherished Orthodox Christian site with deep historical and spiritual significance. Founded in the 14th century, the monastery is associated with Miloš Obilić, a legendary Serbian knight who built it as an act of penance after an accidental injury to a monk in the nearby forest. The name 'Tumane,' derived from 'tuman' meaning 'fog,' captures the mystical ambiance of this sacred site.",
      "The monastery features a stunning church dedicated to Saint Gabriel, surrounded by monastic buildings, tranquil gardens, and a small spring believed to have healing properties. Inside the church, visitors can admire frescoes showcasing Serbian medieval art, including scenes from Christ's life and various saints.",
    ],
    location: 'Golubac',
    locationValue: 'golubac',
    cost: 180,
    images: [
      {
        link: '/activities/history_and_culture/verski_objekat/manastir_tumane/manastir-tumane-1.jpg',
        alt: 'Manastir Tumane 1',
      },
      {
        link: '/activities/history_and_culture/verski_objekat/manastir_tumane/manastir-tumane-2.jpg',
        alt: 'Manastir Tumane 2',
      },
    ],
    durationInDays: 0.5,
    category: 'History & culture',
    categoryValue: 'history_and_culture',
    subCategory: 'Religious object',
  },
];

export const allHistoryAndCulture: Activity[] = [
  ...history_and_culture,
  ...museums,
  ...fortress,
  ...religious_objects,
];
