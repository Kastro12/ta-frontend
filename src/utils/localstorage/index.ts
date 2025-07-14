import { Activity } from '@/utils/interfaces';

const STORAGE_KEY = 'chosenActivities';

export const saveChosenActivitiesToLocalStorage = (activities: Activity[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
  } catch (e) {
    console.error('Error saving chosen activities:', e);
  }
};

export const loadChosenActivitiesFromLocalStorage = (): Activity[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data) as Activity[];
  } catch (e) {
    console.error('Error loading chosen activities:', e);
    return [];
  }
};

export const clearChosenActivitiesFromLocalStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Error clearing chosen activities:', e);
  }
};
