import { Activity } from '@/utils/interfaces';
const allActivities: Activity[] = [
  {
    id: '6625fb90e351da77e46bea8c',
    title: 'Rafting on the Tara River',
    description:
      "Experience exhilarating rafting through Europe's largest canyon, Tara, surrounded by stunning natural beauty.",
    location: 'Tara',
    cost: 180,
    imageLink:
      'https://www.raftingtara.com/files/images/ponude/trodnevni-rafting-skraceni-bg-600x300.jpg',
    category: 'adventure',
  },
  {
    id: '6625fc51e351da77e46bea90',
    title: 'Gondola ride',
    description:
      'Embark on a serene gondola ride in Zlatibor, beholding panoramic vistas of the majestic Zlatibor mountain range, a Balkan gem.',
    location: 'Zlatibor',
    cost: 20,
    imageLink:
      'https://admin.goldgondola.rs/server/storage/media/5717dfbd8b890b3f1ecfc0cecd835a9ce25f772d.jpeg',
    category: 'landscape',
  },
  {
    id: '6625fd44e351da77e46bea93',
    title: 'Golubac Fortress',
    description:"Discover the captivating Golubac Fortress on the Danube River. A testament to medieval architecture and the region's turbulent past.",
    location: 'Golubac',
    cost: 100,
    imageLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Golubac_Fortress_%28%D0%B3%D1%80%D0%B0%D0%B4_%D0%93%D0%BE%D0%BB%D1%83%D0%B1%D0%B0%D1%86%29.jpg/1200px-Golubac_Fortress_%28%D0%B3%D1%80%D0%B0%D0%B4_%D0%93%D0%BE%D0%BB%D1%83%D0%B1%D0%B0%D1%86%29.jpg',
    category: 'history_and_culture',
  },
  {
    id: '662602b8410dc2dad9938982',
    title: 'Mountain biking',
    description:
      'Explore the untamed wilderness of Kopaonik mountain with an adrenaline-pumping mountain biking adventure, perfect for thrill-seekers.',
    location: 'Kopaonik',
    cost: 100,
    imageLink:
      'https://www.infokop.net/images/stories/aktivan-odmor/bike-park/07-bike-park-kopaonik.jpg',
    category: 'adventure',
  },
  {
    id: '662606c2410dc2dad993898d',
    title: 'Archaeological site Vinca',
    description:
      'Delve into the ancient Vinca culture spanning from the 6th to the 3rd millennium BC, at the intriguing archaeological site in Grocka.',
    location: 'Grocka',
    cost: 170,
    imageLink: 'https://beleske.com/wp-content/uploads/2014/06/lepenski-vir-srbija.jpg',
    category: 'history_and_culture',
  },
];

export default allActivities;
