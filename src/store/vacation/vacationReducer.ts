import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from '@/utils/interfaces/index';

export interface IssueInitialState {
  startDate: null | string;
  finishDate: null | string;
  organizerOfTheDays: 'agency' | 'user';
  chosenActivities: Activity[];
  chosenActivitiesAction: 'adding' | 'removing' | null;
}
const initialState: IssueInitialState = {
  startDate: null,
  finishDate: null,
  organizerOfTheDays: 'agency',
  chosenActivities: [],
  chosenActivitiesAction: null,
};

interface TheDateChangeProps {
  type: 'startDate' | 'finishDate';
  date: string | null;
}

export const vacationSlice = createSlice({
  name: 'vacation',
  initialState,
  reducers: {
    changeTheDate: (state, action: PayloadAction<TheDateChangeProps>) => {
      if (typeof action.payload.date === 'string') {
        state[`${action.payload.type}`] = action.payload.date;
      }
      if (action.payload.date === null) {
        if (action.payload.type == 'startDate') state.finishDate = null;
        state[`${action.payload.type}`] = null;
      }
    },
    changeOrganizerOfTheDays: (state, action: PayloadAction<'agency' | 'user'>) => {
      state.organizerOfTheDays = action.payload;
    },
    addActivity: (state, action: PayloadAction<Activity>) => {
      state.chosenActivities = [...state.chosenActivities, action.payload];
      state.chosenActivitiesAction = 'adding';
    },

    removeActivity: (state, action: PayloadAction<string>) => {
      const filteredList = state.chosenActivities.filter(
        (activity) => activity.id != action.payload
      );
      state.chosenActivities = filteredList;
      state.chosenActivitiesAction = 'removing';
    },

    clearActivityAction: (state) => {
      state.chosenActivitiesAction = null;
    },

    updateChosenActivities: (state, action: PayloadAction<Activity[]>) => {
      state.chosenActivities = action.payload;
    },

    deleteVacation: (state) => {
      state = initialState;
    },
  },
});

export const { changeTheDate, addActivity, removeActivity, clearActivityAction } =
  vacationSlice.actions;
export default vacationSlice.reducer;
