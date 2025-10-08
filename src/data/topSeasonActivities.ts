import allActivities from '@/data/activities/allActivities';

const topActivitiesID = [
  { id: 'cycling_kopaonik' },
  { id: 'golubac_fortress_medieval_stronghold' },
  { id: 'zlatibor_gondola' },
  { id: 'canyoning_nevidio' },
  { id: 'vlasinsko_jezero' },
];

const topSeasonActivities = topActivitiesID.map((activity) =>
  allActivities.find((allActivity) => allActivity.id == activity.id)
);

export default topSeasonActivities;
