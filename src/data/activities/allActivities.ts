import { Activity } from '@/utils/interfaces';

import { allAdventure } from './adventure';
import { allHistoryAndCulture } from './history_and_culture';

// allAdventure.sort(() => Math.random() - 0.5)

const allActivities: Activity[] = [...allHistoryAndCulture, ...allAdventure];

export default allActivities;
