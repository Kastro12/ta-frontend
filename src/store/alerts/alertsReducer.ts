import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertsProps } from '@/utils/interfaces';

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
