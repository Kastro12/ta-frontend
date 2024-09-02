import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from '@/utils/interfaces/index';
import { getDateDifference } from '@/utils/date';

export interface IssueInitialState {
  startDate: null | string;
  finishDate: null | string;
  adults: number;
  children: number;
  childrenYears: { years: '1-2' | '2-4' | '4-7' | '7+'; position: number }[];
  chosenActivities: Activity[];
  chosenActivitiesAction: 'adding' | 'removing' | null;
  confirmAddingActivity: null | {
    activity: Activity;
    differenceBetweenStartFinishDate: number;
    maxNumberOfDaysForChosenActivities: number;
  };
  accommodation_radio: 'accommodation_yes' | 'accommodation_no' | null | string;
  transportation_radio: 'transportation_yes' | 'transportation_no' | null | string;
}
const initialState: IssueInitialState = {
  startDate: null,
  finishDate: null,
  chosenActivities: [],
  chosenActivitiesAction: null,
  adults: 1,
  children: 0,
  childrenYears: [],
  confirmAddingActivity: null,
  accommodation_radio: 'accommodation_yes',
  transportation_radio: 'transportation_yes',
};

export interface TheDateChangeProps {
  type: 'startDate' | 'finishDate';
  date: string | null;
}

interface handleIncrementDecrement {
  type: 'adults' | 'children';
}

export interface RadioGroupProps {
  type: 'accommodation_radio' | 'transportation_radio';
  value:
    | 'accommodation_yes'
    | 'accommodation_no'
    | 'transportation_yes'
    | 'transportation_no'
    | string
    | null;
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
        state[`${action.payload.type}`] = null;
      }
      if (action.payload.type == 'startDate') state.finishDate = null;
    },

    changeRadioGroup: (state, action: PayloadAction<RadioGroupProps>) => {
      if (typeof action.payload.type == 'string')
        state[`${action.payload.type}`] = action.payload.value;
    },

    addActivity: (state, action: PayloadAction<Activity>) => {
      let maxNumberOfDaysForChosenActivities = action.payload.durationInDays;
      state.chosenActivities.forEach((activity) => {
        maxNumberOfDaysForChosenActivities += activity.durationInDays;
      });

      const differenceBetweenStartFinishDate = getDateDifference({
        startDate: state.startDate,
        finishDate: state.finishDate,
      });

      if (
        differenceBetweenStartFinishDate != 0 &&
        differenceBetweenStartFinishDate < maxNumberOfDaysForChosenActivities
      ) {
        state.confirmAddingActivity = {
          activity: action.payload,
          differenceBetweenStartFinishDate,
          maxNumberOfDaysForChosenActivities,
        };
      }
      state.chosenActivities = [...state.chosenActivities, action.payload];
      state.chosenActivitiesAction = 'adding';
    },

    stopAddingActivity: (state) => {
      state.confirmAddingActivity = null;
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

    handleIncrement: (state, action: PayloadAction<handleIncrementDecrement>) => {
      state[`${action.payload.type}`] = state[`${action.payload.type}`] + 1;
    },

    handleDecrement: (state, action: PayloadAction<handleIncrementDecrement>) => {
      if (action.payload.type === 'adults' && state[`${action.payload.type}`] == 1) {
        return;
      }

      if (state[`${action.payload.type}`] > 0) {
        state[`${action.payload.type}`] = state[`${action.payload.type}`] - 1;
      }
    },

    addChildrenYears: (
      state,
      action: PayloadAction<{ years: '1-2' | '2-4' | '4-7' | '7+'; position: number }>
    ) => {
      if (state.childrenYears.find((year) => year.position === action.payload.position)) {
        const updated = state.childrenYears.map((year) => {
          if (year.position === action.payload.position) {
            return action.payload;
          } else return year;
        });

        updated.sort((a, b) => a.position - b.position);

        state.childrenYears = updated;
      } else state.childrenYears = [...state.childrenYears, action.payload];
    },

    removeChildrenYears: (state, action: PayloadAction<number>) => {
      const filteredList = state.childrenYears.filter((year) => year.position != action.payload);
      state.childrenYears = filteredList;
    },

    clearVacation: () => initialState,
  },
});

export const {
  changeTheDate,
  addActivity,
  removeActivity,
  updateChosenActivities,
  clearActivityAction,
  handleIncrement,
  handleDecrement,
  addChildrenYears,
  removeChildrenYears,
  clearVacation,
  stopAddingActivity,
  changeRadioGroup,
} = vacationSlice.actions;
export default vacationSlice.reducer;
