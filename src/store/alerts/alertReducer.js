import * as types from "./actions/alertActionTypes";
import assign from "lodash/fp/assign";

const initialState = {
  alert: false,
};

const reducer = (
  state = initialState,
  { type: actionType, payload: actionPayload }
) => {
  switch (actionType) {
    case types.ALERT_CREATED: {
      return setAlertCreated(state, actionPayload);
    }
    case types.ALERT_DELETED: {
      return setAlertDeleted(state);
    }
    default:
      return { ...state };
  }
};

const setAlertCreated = (state, alert) => {
  return assign(state, { alert });
};

const setAlertDeleted = (state) => {
  return assign(state, { alert: false });
};

export const reducerName = "alertReducer";
export default reducer;
