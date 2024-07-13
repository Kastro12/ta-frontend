import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AlertsProps {
  severity: 'success' | 'info' | 'warning' | 'error';
  message: string;
  timeout: number;
}
const initialState: { pageAlert: AlertsProps | null } = {
  pageAlert: null,
};

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    createPageAlert: (state, action: PayloadAction<AlertsProps>) => {
      state.pageAlert = action.payload;
    },

    removePageAlert: (state) => {
      state.pageAlert = null;
    },
  },
});

export const { createPageAlert, removePageAlert } = alertsSlice.actions;
export default alertsSlice.reducer;
