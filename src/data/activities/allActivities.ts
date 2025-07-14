import { Activity } from '@/utils/interfaces';
import { allAdventure } from './adventure';
import { allHistoryAndCulture } from './history_and_culture';
import { allLandscape } from './landscape';
import { allRelaxationAndFlavors } from './relaxation_and_flavors';

// Kombinuj sve aktivnosti
const combinedActivities: Activity[] = [
  ...allLandscape,
  ...allHistoryAndCulture,
  ...allAdventure,
  ...allRelaxationAndFlavors,
];

// Podeli ih u dve grupe
const paidAds = combinedActivities.filter((activity) => activity.paidAd === true);
const nonPaidAds = combinedActivities.filter((activity) => !activity.paidAd);

// Randomizuj samo ne-plaćene
const shuffledNonPaidAds = [...nonPaidAds].sort(() => Math.random() - 0.5);

// Spoji tako da plaćene idu prve
const allActivities: Activity[] = [...paidAds, ...shuffledNonPaidAds];

export default allActivities;
