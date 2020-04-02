import * as ToastAPI from "../utils/toast_api_util";

export const REMOVE_TOAST = "REMOVE_TOAST";
export const RECEIVE_TOAST = "RECEIVE_TOAST";
export const RECEIVE_ALL_TOASTS = "RECEIVE_ALL_TOASTS";
export const RECEIVE_TOAST_ERRORS = "RECEIVE_TOAST_ERRORS";

const receiveToast = toast => {
  return {
    type: RECEIVE_TOAST,
    toast
  };
};

const receiveAllToast = (toasts) => {
  return {
    type: RECEIVE_ALL_TOASTS,
    toasts
  };
};

const removeToast = toastId => {
  return {
    type: REMOVE_TOAST,
    toastId
  };
};

const receieveToastErrors = errors => {
  return {
    type: RECEIVE_TOAST_ERRORS,
    errors
  };
};

export const fetchAllToasts = () => dispatch => {
  ToastAPI.fetchAllToasts()
    .then(toasts => dispatch(receiveAllToast(toasts)),
    errors => dispatch(receieveToastErrors(errors)));
};

export const createToast = toast => dispatch => {
  ToastAPI.createToast(toast)
    .then(toast => dispatch(receiveToast(toast)),
    errors => dispatch(receieveToastErrors(errors)));
};

export const deleteToast = toastId => dispatch => {
  ToastAPI.deleteToast(toastId)
    .then(toastId => dispatch(removeToast(toastId)),
    errors => dispatch(receieveToastErrors(errors)));
};