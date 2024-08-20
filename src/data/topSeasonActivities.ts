import allActivities from '@/data/activities/allActivities';

const topActivitiesID = [
  { id: 'cycling_kopaonik' },
  { id: 'history_and_culture-golubac-fortress–medieval-stronghold' },
  { id: 'landscape_zlatibor_gondola' },
  { id: 'canyoning_nevidio' },
  { id: 'landscape_vlasin_lake' },
];

const topSeasonActivities = topActivitiesID.map((activity) =>
  allActivities.find((allActivity) => allActivity.id == activity.id)
);

export default topSeasonActivities;
