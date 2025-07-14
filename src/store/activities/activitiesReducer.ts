import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from '@/utils/interfaces/index';
import { allActivities } from '@/data';

export interface IssueInitialState {
  activityList: Activity[] | null;
  activitiesToDisplay: Activity[] | null;
  activityListSize: number;
  currentPage: number;
  zoomedActivity: null | Activity;
}
const initialState: IssueInitialState = {
  activityListSize: 8,
  activityList: null,
  activitiesToDisplay: null,
  currentPage: 1,
  zoomedActivity: null,
};

export const activitySlice = createSlice({
  name: 'activities',
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
        const filteredActivities = allActivities.filter(
          (activity) => activity.categoryValue === category && activity.locationValue === location
        );
        state.activityList = filteredActivities;
        state.activitiesToDisplay = filteredActivities.slice(0, state.activityListSize);
        state.currentPage = 1;
        return;
      }

      if (category) {
        const filteredActivities = allActivities.filter(
          (activity) => activity.categoryValue === category
        );

        state.activityList = filteredActivities;
        state.activitiesToDisplay = filteredActivities.slice(0, state.activityListSize);
        state.currentPage = 1;
        return;
      }
      if (location) {
        const filteredActivities = allActivities.filter(
          (activity) => activity.locationValue === location
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
      if (action.payload <= state.currentPage) return;
      state.currentPage = action.payload;
    },

    zoomActivity: (state, action: PayloadAction<Activity>) => {
      state.zoomedActivity = action.payload;
    },

    removeZoomedActivity: (state) => {
      state.zoomedActivity = null;
    },

    clearActivities: () => {
      return initialState;
    },
  },
});

export const {
  filterActivityList,
  updateActivitiesToDisplay,
  updateCurrentPage,
  clearActivities,
  zoomActivity,
  removeZoomedActivity,
} = activitySlice.actions;
export default activitySlice.reducer;
