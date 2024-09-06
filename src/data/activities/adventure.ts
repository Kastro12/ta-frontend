import { Activity } from '@/utils/interfaces';

const rafting: Activity[] = [
  {
    id: 'adventure-rafting-tara',
    title: 'Rafting on the Tara river',
    description:
      "Embark on an exhilarating rafting adventure on the Tara River, one of the Balkans' most stunning rivers. Navigate breathtaking canyons and experience untouched nature.",
    longDescritpion: [
      'Rafting on the Tara, which is often called the "Tear of Europe", is an adventure that combines exciting rapids with the natural beauty of this river. Flowing through Europe\'s deepest canyon, the river offers both serene stretches for enjoying the stunning landscapes and exciting rapids that cater to different skill levels.',
      'Most tours cover 18 to 25 kilometers, passing by towering cliffs, dense forests, and cascading waterfalls. With rapids classified as Class III to IV, the experience is thrilling yet safe, guided by professionals who provide all necessary equipment.',
      'After the adventure, you can unwind by the river, savor a traditional meal, and take in the pristine surroundings. Rafting on the Tara River is not just about excitement; it’s a chance to connect with nature in one of Europe’s most unspoiled environments.',
    ],
    location: 'Tara',
    locationValue: 'tara',
    cost: 300,
    images: [
      {
        link: '/activities/adventure/rafting/tara_river/rafting-tara-1.jpg',
        alt: 'rafting on the Tara river 1',
      },
      {
        link: '/activities/adventure/rafting/tara_river/rafting-tara-2.jpg',
        alt: 'rafting on the Tara river 2',
      },
      {
        link: '/activities/adventure/rafting/tara_river/rafting-tara-3.jpg',
        alt: 'rafting on the Tara river 3',
      },
    ],
    durationInDays: 2,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'Rafting',
  },

  {
    id: 'adventure-rafting-ibar',
    title: 'Rafting on the Ibar river',
    description:
      'Experience the thrill of rafting on the Ibar River through the scenic Valley of Serbian Kings, past the majestic Maglič Castle.',
    longDescritpion: [
      'The Ibar River, originating from Hajla mountain in Montenegro, flows through Serbia, offering an exciting rafting experience. Spanning 272 km, the river winds through stunning landscapes, including the Valley of Serbian Kings, passing by the medieval Maglič Castle.',
      "Rafting on the Ibar is a thrilling journey that combines Class III rapids with Serbia's rich history and natural beauty. The adventure begins in Ušće, where professional guides provide all necessary equipment and a safety briefing before starting the 15-kilometer route. Along the way, you'll navigate exciting rapids like Grmčić and Jagnjilo, with calmer sections offering breathtaking views of Maglič Castle and historical monuments.",
      'Opportunities to swim, relax on shingle beaches, and capture the stunning surroundings make this experience perfect for families, friends, and anyone looking to mix adventure with Serbian culture.',
    ],
    location: 'Kraljevo',
    locationValue: 'kraljevo',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/rafting/ibar_river/rafting-ibar-1.jpg',
        alt: 'rafting on the Ibar river 1',
      },
      {
        link: '/activities/adventure/rafting/ibar_river/rafting-ibar-2.jpg',
        alt: 'rafting on the Ibar river 2',
      },
      {
        link: '/activities/adventure/rafting/ibar_river/rafting-ibar-3.jpg',
        alt: 'rafting on the Ibar river 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'Rafting',
  },
];

const paragliding: Activity[] = [
  {
    id: 'adventure-paragliding-zlatibor',
    title: 'Paragliding Zlatibor',
    description:
      "Experience the thrill of paragliding over Zlatibor's stunning landscapes. Soar from Čigota peaks at 1,422 meters with professional guidance, capturing unforgettable views.",
    longDescritpion: [
      'Paragliding over Zlatibor offers a unique view of this stunning region. The flight starts from the Čigota peak at 1,422 meters above sea level and lasts 15 minutes, allowing you to soar above Zlatibor’s rolling hills, green meadows, and dense forests.',
      "No matter your experience level, you'll be in safe hands. The experienced instructors ensure that all safety measures are strictly followed, providing you with a secure and enjoyable flight. From pre-flight preparations to a smooth landing, your safety and comfort are their top priorities, allowing you to fully enjoy the breathtaking views.",
    ],
    location: 'Zlatibor',
    locationValue: 'zlatibor',
    cost: 300,
    images: [
      {
        link: '/activities/adventure/paragliding/zlatibor/paragliding-zlatibor-1.jpg',
        alt: 'paragliding zlatibor 1',
      },
      {
        link: '/activities/adventure/paragliding/zlatibor/paragliding-zlatibor-2.jpg',
        alt: 'paragliding zlatibor 2',
      },
      {
        link: '/activities/adventure/paragliding/zlatibor/paragliding-zlatibor-3.jpg',
        alt: 'paragliding zlatibor 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'Paragliding',
  },

  {
    id: 'adventure-paragliding-budva',
    title: 'Paragliding Budva, Montenegro',
    description:
      "Soar above Budva's Adriatic coast with a paragliding adventure. Glide from coastal mountains, capturing panoramic views of the vibrant sea and historic Old Town.",
    longDescritpion: [
      "Paragliding in Budva, Montenegro, offers a thrilling way to experience the Adriatic coast from above. Paragliding from the cliffs and mountains surrounding the town, you'll be greeted by breathtaking views of the crystal-clear Adriatic Sea, lush greenery, and Budva's historic Old Town.",
      "This adventure is perfect for both beginners and seasoned flyers, with experienced pilots guiding you through a smooth and exhilarating flight. Tandem flights are available for newcomers. Lasting 15 to 30 minutes, depending on the weather, the flight provides unparalleled views of Montenegro's rugged landscape, including beaches, coves, and the iconic Sveti Stefan island.",
    ],
    location: 'Budva',
    locationValue: 'budva',
    cost: 300,
    images: [
      {
        link: '/activities/adventure/paragliding/budva/paragliding-budva-1.jpg',
        alt: 'paragliding budva 1',
      },
      {
        link: '/activities/adventure/paragliding/budva/paragliding-budva-2.jpg',
        alt: 'paragliding budva 2',
      },
      {
        link: '/activities/adventure/paragliding/budva/paragliding-budva-3.jpg',
        alt: 'paragliding budva 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'Paragliding',
  },
];

const kayaking: Activity[] = [
  {
    id: 'adventure-kayaking-drina',
    title: 'Drina Kayak adventure',
    description:
      'Embark on an unforgettable 22 km kayaking journey down the Drina River. Explore stunning landscapes, the majestic Vrelo Waterfall, and the iconic house on the rock.',
    longDescritpion: [
      'Embark on our Drina Kayak Adventure and paddle through the longest karst river in the Dinaric Alps. This 22 km trip offers stunning views and a deep connection with nature. Along the way, visit the picturesque Vrelo Waterfall and the iconic house on the rock near Bajina Bašta.',
      'Relax on serene beaches during lunch breaks and enjoy the beauty around you. No prior kayaking experience is required; our stable kayaks and expert guides ensure a safe, enjoyable experience for everyone. Explore the wonders of the Drina River like a true adventurer!',
    ],
    location: 'Bajina Basta',
    locationValue: 'bajina_basta',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/kayaking/drina/kayak-drina-1.jpg',
        alt: 'Drina Kayak Adventure 1',
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
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'kayaking',
  },

  {
    id: 'adventure-kayaking-danube-iron-gate',
    title: 'Kayaking the Danube iron gate',
    description:
      'Explore the majestic Danube River on a kayaking tour through Serbia’s Iron Gate. Discover historic sites, stunning views, and pristine nature along the way.',
    longDescritpion: [
      "Experience the grandeur of Europe’s second-longest river, the Danube, with our kayaking tour through the Iron Gate. As you paddle through Serbia, you'll encounter breathtaking monuments and archaeological sites from the Middle Ages to the First Century AD.",
      'Enjoy spectacular scenery and pristine nature while navigating this iconic region. No prior experience is needed; all equipment and guidance will be provided, allowing you to fully immerse in the adventure and the stunning views.',
    ],
    location: 'Đerdap',
    locationValue: 'djerdap',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/kayaking/danube_iron_gate/kayak-danube-iron-gate-1.jpg',
        alt: 'Kayaking the Danube Iron Gate',
      },
      {
        link: '/activities/adventure/kayaking/danube_iron_gate/kayak-danube-iron-gate-2.jpg',
        alt: 'Kayaking the Danube Iron Gate 2',
      },
      {
        link: '/activities/adventure/kayaking/danube_iron_gate/kayak-danube-iron-gate-3.jpg',
        alt: 'Kayaking the Danube Iron Gate 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'kayaking',
  },

  {
    id: 'adventure-kayaking-uvac',
    title: 'Uvac kayak adventure',
    description:
      'Paddle through the breathtaking meanders of Uvac Lake and uncover its hidden wonders on a serene and picturesque kayaking journey.',
    longDescritpion: [
      'Experience Uvac Lake’s beauty from a fresh perspective with our kayaking adventure. Known for its stunning curves and pristine nature, Uvac Lake offers a unique way to explore hidden gems. Paddle through mesmerizing landscapes, discover cave entrances inaccessible by land, and enjoy spectacular views from the Molitva viewpoint.',
      'Suitable for both seasoned kayakers and beginners, skilled instructors ensure a safe and memorable experience. Leave the land behind and dive into the beauty of Uvac Lake.',
    ],
    location: 'Nova Varos',
    locationValue: 'nova_varos',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/kayaking/uvac/kayak-uvac-1.jpg',
        alt: 'Uvac Kayak Adventure',
      },
      {
        link: '/activities/adventure/kayaking/uvac/kayak-uvac-2.jpg',
        alt: 'Uvac Kayak Adventure 2',
      },
      {
        link: '/activities/adventure/kayaking/uvac/kayak-uvac-3.jpg',
        alt: 'Uvac Kayak Adventure 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'kayaking',
  },

  {
    id: 'adventure-war-island-kayak',
    title: 'War Island kayak adventure',
    description:
      'Explore the picturesque War Island in Belgrade from a unique vantage point with our exhilarating kayak tour. Enjoy stunning views and a refreshing adventure.',
    longDescritpion: [
      'Add an adventurous twist to your visit to Belgrade with our War Island Kayak Adventure. Located at the confluence of the Sava and Danube rivers, War Island is a protected nature area perfect for exploration.',
      'Paddle along the river to experience the island’s beauty, with views of the iconic Belgrade Fortress. Spot local birdlife, swim, and relax on the Lido beach at the northern tip. This tour offers a refreshing departure from traditional sightseeing—grab a paddle and dive into a unique Belgrade experience!',
    ],
    location: 'Belgrade',
    locationValue: 'belgrade',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/kayaking/war_island/kayak-war-island-belgrade-1.jpg',
        alt: 'War Island Kayak Adventure 1',
      },
      {
        link: '/activities/adventure/kayaking/war_island/kayak-war-island-belgrade-2.jpg',
        alt: 'War Island Kayak Adventure 2',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'kayaking',
  },
];

const jeep_safary: Activity[] = [
  {
    id: 'adventure-jeep_safari_durmitor_rings',
    title: 'Jeep safari around Durmitor ring',
    description:
      'Experience a thrilling jeep safari around Durmitor Ring, ideal for adrenaline junkies and off-road enthusiasts eager to explore rugged terrains and hidden beauties.',
    longDescritpion: [
      'Experience an unforgettable jeep safari around the Durmitor Ring, perfect for adventure enthusiasts and off-road lovers. This thrilling tour takes you through challenging terrains in robust vehicles like Land Rover, Nissan, and Toyota.',
      'Explore wild landscapes and discover the hidden gems of Durmitor while enjoying an exhilarating ride. Ideal for those seeking to immerse themselves in the raw beauty of Montenegro’s rugged wilderness.',
    ],
    location: 'Durmitor',
    locationValue: 'durmitor',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/jeep_safary/durmitor_rings/jeep-safari-durmitor-1.jpg',
        alt: 'Jeep Safari around durmitor rings 1',
      },
      {
        link: '/activities/adventure/jeep_safary/durmitor_rings/jeep-safari-durmitor-2.jpg',
        alt: 'Jeep Safari around durmitor rings 2',
      },
      {
        link: '/activities/adventure/jeep_safary/durmitor_rings/jeep-safari-durmitor-3.jpg',
        alt: 'Jeep Safari around durmitor rings 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'jeep_safari',
  },
];

const horse_riding: Activity[] = [
  {
    id: 'horse_riding_tara',
    title: 'Horse riding on Tara mountain',
    description:
      'Experience the beauty of Tara Mountain with guided horseback riding, perfect for both beginners and seasoned riders.',
    longDescritpion: [
      'Immerse yourself in the majestic landscapes of Tara Mountain with a unique horseback riding experience. This service offers a range of horses, including thoroughbreds and Anglo-Arabians. Experienced riders can explore scenic trails past pine-covered hills, viewpoints, and serene streams.',
      "If you're new to riding, recreational sessions provide a gentle introduction, with options for shorter rides through the surrounding nature. A comprehensive riding school is also available.",
    ],
    location: 'Tara',
    locationValue: 'tara',
    cost: 180,
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
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'Horse riding',
  },

  {
    id: 'horse_riding_fruska_gora',
    title: 'Horse riding on Fruska Gora',
    description:
      'Set off on a horseback riding adventure across the stunning landscapes of Fruška Gora, ideal for riders of all levels, offering a memorable and scenic experience.',
    longDescritpion: [
      'Discover the beauty of Fruška Gora on horseback, riding through rolling hills, serene lakes, and lush forests. Suitable for both seasoned riders and beginners, the trails offer a safe and exciting experience for everyone.',
      "Guided by experienced leaders, you'll explore diverse terrain, with options to ride at a leisurely pace or pick up the speed for more thrill. The adventure begins at Šumska štala, where booking in advance ensures a perfect outdoor experience on Fruška Gora.",
    ],
    location: 'Fruska Gora',
    locationValue: 'fruska_gora',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/horse_riding/fruska_gora/horse-riding-on-fruska-gora-1.jpg',
        alt: 'horse riding on Fruska gora',
      },
      {
        link: '/activities/adventure/horse_riding/fruska_gora/horse-riding-on-fruska-gora-2.jpg',
        alt: 'horse riding on Fruska gora 2',
      },
      {
        link: '/activities/adventure/horse_riding/fruska_gora/horse-riding-on-fruska-gora-3.jpg',
        alt: 'horse riding on Fruska gora 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'Horse riding',
  },
];

const hiking: Activity[] = [
  {
    id: 'hiking_rtanj_mountain',
    title: 'Hiking on Rtanj mountain',
    description:
      'Explore the mystical Rtanj Mountain, famous for its pyramid shape and legends of hidden treasures. A hike to its peak, Šiljak, offers an exciting adventure.',
    longDescritpion: [
      'Rtanj Mountain, located in eastern Serbia, is renowned for its striking pyramid-shaped peak, Šiljak, which rises to 1,565 meters. This karst terrain is rich in natural beauty and local legends, making it a captivating destination for hikers.',
      "Steeped in mystery, Rtanj is said to hide a wizard's treasure within its slopes. At the summit, you'll find the remnants of a chapel dedicated to St. George, built in 1932 by a local miner's wife. Though in ruins, the chapel adds to Rtanj's enigmatic atmosphere.",
    ],
    location: 'Sokobanja',
    locationValue: 'sokobanja',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/hiking/rtanj_mountain/rtanj-mountain-1.jpg',
        alt: 'Hiking on Rtanj Mountain',
      },
      {
        link: '/activities/adventure/hiking/rtanj_mountain/rtanj-mountain-2.jpg',
        alt: 'Hiking on Rtanj Mountain 2',
      },
      {
        link: '/activities/adventure/hiking/rtanj_mountain/rtanj-mountain-3.jpg',
        alt: 'Hiking on Rtanj Mountain 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'hiking',
  },
];

const fishing: Activity[] = [
  {
    id: 'fishing-adventure-on-the-drina-river',
    title: 'Fishing on the Drina river',
    description:
      'Enjoy a peaceful yet exciting fishing experience on the Drina River, renowned for its rich fish population and stunning natural beauty. Perfect for anglers of all levels.',
    longDescritpion: [
      "The Drina River, one of Serbia's most beautiful and clean rivers, offers an exceptional fishing experience. Known for its abundance of fish, including huchen (Danube salmon), brown trout, grayling, chub, and barbel, the Drina’s clear waters and varied ecosystems are perfect for both recreational and sport fishing.",
      'Stretching through untouched nature, the river provides numerous fishing spots with unique challenges and rewards. Whether fishing from the banks or by boat, you’ll enjoy the serene beauty of the Drina and its surroundings.',
    ],
    location: 'Bajina Basta',
    locationValue: 'bajina_basta',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/fishing/drina_river/fishing-drina-river-1.jpg',
        alt: 'Fishing on the Drina river 1',
      },
      {
        link: '/activities/adventure/fishing/drina_river/fishing-drina-river-2.jpg',
        alt: 'Fishing on the Drina river 2',
      },
      {
        link: '/activities/adventure/fishing/drina_river/fishing-drina-river-3.jpg',
        alt: 'Fishing on the Drina river 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'fishing',
  },

  {
    id: 'fishing-adventure-on-the-tara-river',
    title: 'Fishing on the Tara river',
    description:
      'Experience fishing on the Tara River, with its pristine waters and abundant fish species. This serene setting is an ideal escape for anglers of all skill levels.',
    longDescritpion: [
      "The Tara River, flowing through Montenegro and Bosnia and Herzegovina, is a Balkan gem known for its clear, turquoise waters and dramatic canyon landscapes. As one of Europe's cleanest rivers, it offers an excellent fishing environment.",
      "Home to trout, grayling, and huchen, the Tara River is ideal for both experienced anglers and beginners. Fishing here provides a peaceful retreat into nature, surrounded by stunning scenery. Enjoy the river's tranquility, the thrill of the catch, and the beauty of its untouched wilderness, making the Tara River a top fishing destination.",
    ],
    location: 'Tara',
    locationValue: 'tara',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/fishing/tara_river/fishing-on-tara-river-1.jpg',
        alt: 'Fishing on the Tara River',
      },
      {
        link: '/activities/adventure/fishing/tara_river/fishing-on-tara-river-2.jpg',
        alt: 'Fishing on the Tara River 2',
      },
      {
        link: '/activities/adventure/fishing/tara_river/fishing-on-tara-river-3.jpg',
        alt: 'Fishing on the Tara River 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'fishing',
  },
];

const cycling: Activity[] = [
  {
    id: 'cycling_kopaonik',
    title: 'Mountain biking on Kopaonik',
    description:
      'Kopaonik offers thrilling mountain biking trails with stunning views. Ideal for adventure seekers and outdoor enthusiasts.',
    longDescritpion: [
      'Kopaonik, Serbia’s largest mountain range and premier ski resort, becomes a mountain biking paradise in the warmer months. It offers trails for all skill levels, from beginner-friendly paths through lush forests to challenging downhill routes with steep descents and sharp turns.',
      'The well-marked trails provide stunning views of the surrounding mountains and valleys. Kopaonik’s biking infrastructure includes bike rentals, guided tours, and lifts to transport bikers and their equipment to higher elevations for longer rides.',
    ],
    location: 'Kopaonik',
    locationValue: 'kopaonik',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/cycling/kopaonik/mountain-biking-kopaonik-1.jpg',
        alt: 'Mountain Biking on Kopaonik 1',
      },
      {
        link: '/activities/adventure/cycling/kopaonik/mountain-biking-kopaonik-2.jpg',
        alt: 'Mountain Biking on Kopaonik 2',
      },
      {
        link: '/activities/adventure/cycling/kopaonik/mountain-biking-kopaonik-3.jpg',
        alt: 'Mountain Biking on Kopaonik 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'cycling',
  },

  {
    id: 'cycling_tara',
    title: 'Mountain biking on Tara',
    description:
      'Set off on an exhilarating mountain biking adventure through Tara, exploring its stunning terrain and scenic views for an unforgettable experience.',
    longDescritpion: [
      'Experience the allure of Tara Mountain with an exciting MTB tour through its stunning wilderness. The elevation of Tara adds to the thrill as you cycle through dense pine forests and along towering cliffs with expansive views.',
      'With over 75 kilometers of cycling routes in Tara National Park, starting from various tourist centers, this adventure offers a chance to explore Tara’s rich natural beauty. Pedal through lush meadows and visit spectacular viewpoints, immersing yourself in the serene and majestic landscapes that make Tara a must-see for mountain biking enthusiasts.',
    ],
    location: 'Tara',
    locationValue: 'tara',
    cost: 180,
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
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'cycling',
  },
];

const canyoning: Activity[] = [
  {
    id: 'canyoning_nevidio',
    title: 'Nevidio canyon adventure',
    description:
      "Discover Montenegro's hidden marvels with an exhilarating canyoning experience in Nevidio Canyon, nestled on Durmitor's southern slopes.",
    longDescritpion: [
      "The Nevidio Canyon, on the southern slopes of Montenegro's Durmitor mountain, offers an awe-inspiring canyoning adventure. Formed by the Mala Komarnica River, this 2-kilometer canyon features a dramatic 125-meter altitude drop, from 935 meters above sea level at the entrance to 810 meters at the exit.",
      "As you navigate the canyon, you'll be captivated by its wild beauty and hidden natural wonders. Ideal for thrill-seekers and nature lovers, the Nevidio Canyon is a must-visit for an unforgettable outdoor adventure.",
    ],
    location: 'Durmitor',
    locationValue: 'durmitor',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/canyoning/nevidio/canyoning-nevidio-1.jpg',
        alt: 'Nevidio Canyon Adventure 1',
      },
      {
        link: '/activities/adventure/canyoning/nevidio/canyoning-nevidio-2.jpg',
        alt: 'Nevidio Canyon Adventure 2',
      },
      {
        link: '/activities/adventure/canyoning/nevidio/canyoning-nevidio-3.jpg',
        alt: 'Nevidio Canyon Adventure 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'canyoning',
  },
];

const bungee_jump: Activity[] = [
  {
    id: 'bungee_jump_ada_ciganlija',
    title: 'Bungee jump at Ada Ciganlija',
    description:
      'Take the plunge with a thrilling bungee jump at Ada Ciganlija, Belgrade’s top spot for adrenaline seekers. Experience the ultimate rush!',
    longDescritpion: [
      'Bungee jumping is an extreme adventure sport, and Ada Ciganlija features one of the world’s most stunning and tallest bungee centers. With a crane towering 55 meters above the water, it offers breathtaking jumps.',
      'The center is staffed by a well-trained team and certified professionals with international credentials. Since its opening in 1996, over 15,000 jumps have been completed, demonstrating its reliability and commitment to safety.',
    ],
    location: 'Belgrade',
    locationValue: 'belgrade',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/bungee_jump/bungee-jump-belgrade.jpg',
        alt: 'Bungee Jump at Ada Ciganlija',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'Bungee jumb',
  },
];

const quad_bike: Activity[] = [
  {
    id: 'quad_bike_zlatibor',
    title: 'Quad Bike Adventure in Zlatibor',
    description:
      'Experience the thrill of quad biking in Zlatibor as you conquer rugged terrains and take in spectacular scenery.',
    longDescritpion: [
      "Experience the thrill of a quad bike adventure in Zlatibor, one of Serbia's most picturesque mountain regions. This exhilarating activity takes you through rugged terrains, dense forests, and open meadows, all while taking in the captivating natural beauty that Zlatibor is renowned for.",
      "Designed for both beginners and experienced riders, the quad bike tours offer a range of routes varying in difficulty and length. Whether you prefer a short, scenic ride or a more challenging trek through the wilderness, you’ll enjoy panoramic views of Zlatibor's rolling hills and valleys.",
      "Guided by experienced instructors, you'll learn how to safely handle the quad bikes, ensuring a fun and secure adventure. Along the way, you'll have the chance to pause, take in the views, capture photos, and even learn about the local flora and fauna from your guide.",
    ],
    location: 'Zlatibor',
    locationValue: 'zlatibor',
    cost: 180,
    images: [
      {
        link: '/activities/adventure/quad_bike/zlatibor/quad-bike-zlatibor-1.jpg',
        alt: 'Quad Bike Adventure in Zlatibor 1',
      },
      {
        link: '/activities/adventure/quad_bike/zlatibor/quad-bike-zlatibor-2.jpg',
        alt: 'Quad Bike Adventure in Zlatibor 2',
      },
      {
        link: '/activities/adventure/quad_bike/zlatibor/quad-bike-zlatibor-3.jpg',
        alt: 'Quad Bike Adventure in Zlatibor 3',
      },
    ],
    durationInDays: 1,
    category: 'Adventure',
    categoryValue: 'adventure',
    subCategory: 'Quad bike',
  },
];

export const allAdventure: Activity[] = [
  ...paragliding,
  ...rafting,
  ...kayaking,
  ...jeep_safary,
  ...horse_riding,
  ...hiking,
  ...fishing,
  ...cycling,
  ...canyoning,
  ...bungee_jump,
  ...quad_bike,
];
