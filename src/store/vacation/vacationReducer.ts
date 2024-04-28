import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from '@/utils/interfaces/index';

export interface IssueInitialState {
  startDate: null | string;
  finishDate: null | string;
  organizerOfTheDays: 'agency' | 'user';
  chosenActivities: Activity[];
}
const initialState: IssueInitialState = {
  startDate: null,
  finishDate: null,
  organizerOfTheDays: 'agency',
  chosenActivities: [],
};

interface TheDateChangeProps {
  type: 'startDate' | 'finishDate';
  date: string;
}

export const vacationSlice = createSlice({
  name: 'vacation',
  initialState,
  reducers: {
    changeTheDate: (state, action: PayloadAction<TheDateChangeProps>) => {
      state[`${action.payload.type}`] = action.payload.date;
    },
    changeOrganizerOfTheDays: (state, action: PayloadAction<'agency' | 'user'>) => {
      state.organizerOfTheDays = action.payload;
    },
    addActivity: (state, action: PayloadAction<Activity>) => {
      state.chosenActivities = [...state.chosenActivities, action.payload];
    },

    removeActivity: (state, action: PayloadAction<string>) => {
      const filteredList = state.chosenActivities.filter(
        (activity) => activity.id != action.payload
      );

      state.chosenActivities = filteredList;
    },

    updateChosenActivities: (state, action: PayloadAction<Activity[]>) => {
      state.chosenActivities = action.payload;
    },

    deleteVacation: (state) => {
      state = initialState;
    },
  },
});

export const { changeTheDate } = vacationSlice.actions;
export default vacationSlice.reducer;
