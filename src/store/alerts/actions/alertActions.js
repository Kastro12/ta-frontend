import * as types from "./alertActionTypes";

export const createAlert = (type, message, useTimeout) => ({
  type: types.ALERT_CREATED,
  payload: { type, message, useTimeout },
});

export const createSuccessAlert =
  (message, useTimeout = false) =>
  (dispatch) => {
    dispatch(createAlert("success", message, useTimeout));
  };

export const createErrorAlert =
  (message, useTimeout = false) =>
  (dispatch) => {
    dispatch(createAlert("error", message, useTimeout));
  };

export const deleteAlert = () => ({
  type: types.ALERT_DELETED,
});
