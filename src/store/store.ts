import { configureStore } from '@reduxjs/toolkit';
import alertsReducer from './alerts/alertsReducer';
import vacationReducer from './vacation/vacationReducer';
import predefinedVacationReducer from './vacation/predefinedVacationReducer';
import activitiesReducer from './activities/activitiesReducer';

export const store = configureStore({
  reducer: {
    alerts: alertsReducer,
    vacation: vacationReducer,
    predefinedVacation: predefinedVacationReducer,
    activities: activitiesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
