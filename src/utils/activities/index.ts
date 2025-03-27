import { Activity } from '@/utils/interfaces/index';

export const getRecommendedActivities = (
  allActivities: Activity[],
  currentActivity: Activity | null
): Activity[] => {
  if (!currentActivity) return [];

  let recommended: Activity[] = [];

  // Prvi uslov: aktivnosti sa istom lokacijom i kategorijom
  const firstFilter = allActivities.filter(
    (activity) =>
      activity.id !== currentActivity.id &&
      activity.locationValue === currentActivity.locationValue &&
      activity.categoryValue === currentActivity.categoryValue
  );
  recommended.push(...firstFilter);

  // Ako i dalje nemamo dovoljno, dodajemo iz trećeg uslova (ista lokacija, ali različita kategorija)
  if (recommended.length < 4) {
    const thirdFilter = allActivities.filter(
      (activity) =>
        activity.id !== currentActivity.id &&
        activity.locationValue === currentActivity.locationValue &&
        activity.categoryValue !== currentActivity.categoryValue &&
        !recommended.some((a) => a.id === activity.id) // Izbegavamo duplikate
    );

    recommended.push(...thirdFilter.slice(0, 4 - recommended.length));
  }

  // Ako nema dovoljno, dodajemo iz drugog uslova (ista kategorija, ali različita lokacija)
  if (recommended.length < 4) {
    const secondFilter = allActivities.filter(
      (activity) =>
        activity.id !== currentActivity.id &&
        activity.categoryValue === currentActivity.categoryValue &&
        activity.locationValue !== currentActivity.locationValue &&
        !recommended.some((a) => a.id === activity.id) // Izbegavamo duplikate
    );

    recommended.push(...secondFilter.slice(0, 4 - recommended.length));
  }

  return recommended.slice(0, 4); // Ograničavamo rezultat na 4 elementa
};
