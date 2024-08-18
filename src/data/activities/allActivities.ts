import { Activity } from '@/utils/interfaces';

import { allAdventure } from './adventure';
import { allHistoryAndCulture } from './history_and_culture';

import { allLandscape } from './landscape';

// allAdventure.sort(() => Math.random() - 0.5)

const allActivities: Activity[] = [...allLandscape, ...allHistoryAndCulture, ...allAdventure];

export default allActivities;
