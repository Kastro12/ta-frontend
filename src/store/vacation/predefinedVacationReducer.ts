import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IssueInitialState {
  startDate: null | string;
  finishDate: null | string;
  adults: number;
  children: number;
  childrenYears: { years: '1-2' | '2-4' | '4-7' | '7+'; position: number }[];
  chosenPredefinedVacation: null | string;
}
const initialState: IssueInitialState = {
  startDate: null,
  finishDate: null,
  chosenPredefinedVacation: null,
  adults: 1,
  children: 0,
  childrenYears: [],
};

export interface TheDateChangeProps {
  type: 'startDate' | 'finishDate';
  date: string | null;
}

interface handleIncrementDecrement {
  type: 'adults' | 'children';
}

export const predefinedVacationSlice = createSlice({
  name: 'predefinedVacation',
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

    addPredefinedVacation: (state, action: PayloadAction<string>) => {
      state.chosenPredefinedVacation = action.payload;
    },

    removePredefinedVacation: (state) => {
      state.chosenPredefinedVacation = null;
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

    clearVacation: (state) => initialState,
  },
});

export const {
  changeTheDate,
  addPredefinedVacation,
  removePredefinedVacation,
  handleIncrement,
  handleDecrement,
  addChildrenYears,
  removeChildrenYears,
  clearVacation,
} = predefinedVacationSlice.actions;
export default predefinedVacationSlice.reducer;
