import homepage from './homepage.json';
import global from './global.json';
import organizedVacations from './organizedVacations.json';
import categories from './categories.json';
import activitiesAdventure from './activities/adventure.json';
import activitiesHistoryAndCulture from './activities/history_and_culture.json';
import activitiesLandscape from './activities/landscape.json';
import activitiesRelaxationAndFlavors from './activities/relaxation_and_flavors.json';
import landingPages from './landingPages.json';
import termsAndConditions from './termsAndConditions.json';

export default {
  global,
  homePage: homepage,
  organizedVacations,
  categories,
  activities: {
    ...activitiesAdventure,
    ...activitiesHistoryAndCulture,
    ...activitiesLandscape,
    ...activitiesRelaxationAndFlavors,
  },
  landingPages,
  termsAndConditions,
};
