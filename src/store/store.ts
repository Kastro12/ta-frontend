import { configureStore } from '@reduxjs/toolkit';
import IssueReducer from './issue/issueReducer';
import vacationReducer from './vacation/vacationReducer';
import activitiesReducer from './activities/activitiesReducer';

export const store = configureStore({
  reducer: {
    issue: IssueReducer,
    vacation: vacationReducer,
    activities: activitiesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
