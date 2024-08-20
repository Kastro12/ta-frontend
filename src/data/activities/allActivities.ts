import { Activity } from '@/utils/interfaces';
import { allAdventure } from './adventure';
import { allHistoryAndCulture } from './history_and_culture';
import { allLandscape } from './landscape';

const allActivities: Activity[] = [...allLandscape, ...allHistoryAndCulture, ...allAdventure];

allActivities.sort(() => Math.random() - 0.5);

export default allActivities;
