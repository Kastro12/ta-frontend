import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from '@/utils/interfaces/index';
import { allActivities, activityCategories, activityLocations } from '@/data';

export interface IssueInitialState {
  activityList: Activity[] | null;
  activitiesToDisplay: Activity[] | null;
  activityListSize: number;
  currentPage: number;
}
const initialState: IssueInitialState = {
  activityListSize: 4,
  activityList: null,
  activitiesToDisplay: null,
  currentPage: 1,
};

export const activitySlice = createSlice({
  name: 'vacation',
  initialState,
  reducers: {
    filterActivityList: (
      state,
      action: PayloadAction<{ category: string | null; location: string | null }>
    ) => {
      const category = action.payload.category;
      const location = action.payload.location;

      if (category === null && location === null) {
        state.activityList = allActivities;
        state.activitiesToDisplay = allActivities.slice(0, state.activityListSize);
        state.currentPage = 1;
        return;
      }

      if (category && location) {
        const categoryData = activityCategories.find((item) => item.value === category);
        const locationData = activityLocations.find((item) => item.value === location);

        const filteredActivities = allActivities.filter(
          (activity) =>
            activity.category === categoryData?.label && activity.location === locationData?.label
        );
        state.activityList = filteredActivities;
        state.activitiesToDisplay = filteredActivities.slice(0, state.activityListSize);
        state.currentPage = 1;
        return;
      }

      if (category) {
        const categoryData = activityCategories.find((item) => item.value === category);

        const filteredActivities = allActivities.filter(
          (activity) => activity.category === categoryData?.label
        );
        state.activityList = filteredActivities;
        state.activitiesToDisplay = filteredActivities.slice(0, state.activityListSize);
        state.currentPage = 1;
        return;
      }
      if (location) {
        const locationData = activityLocations.find((item) => item.value === location);

        const filteredActivities = allActivities.filter(
          (activity) => activity.location === locationData?.label
        );

        state.activityList = filteredActivities;
        state.activitiesToDisplay = filteredActivities.slice(0, state.activityListSize);
        state.currentPage = 1;
        return;
      }
    },

    updateActivitiesToDisplay: (state, action: PayloadAction<Activity[]>) => {
      state.activitiesToDisplay = state.activitiesToDisplay
        ? [...state.activitiesToDisplay, ...action.payload]
        : null;
    },

    updateCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { filterActivityList, updateActivitiesToDisplay, updateCurrentPage } =
  activitySlice.actions;
export default activitySlice.reducer;
