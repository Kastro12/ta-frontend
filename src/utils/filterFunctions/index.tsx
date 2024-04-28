import { useMemo } from 'react';
import { Activity } from '@/utils/interfaces';

export const getUniquePropOfAllActivities = (data: Activity[], propertyName: string) => {
  return useMemo(() => {
    const uniqueValues: Activity[] = [];
    if (propertyName)
      data.forEach((item: any) => {
        if (!uniqueValues.includes(item[propertyName])) {
          uniqueValues.push(item[propertyName]);
        }
      });
    return uniqueValues;
  }, [data, propertyName]);
};
