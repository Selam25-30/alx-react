import * as uiActionTypes from './uiActionTypes';

export function login(email, password) {
  return {
    type: uiActionTypes.LOGIN,
    user: {email, password}
  };
}
export const boundLogin = (email, password) => dispatch(login(email, password));

export function logout() {
  return {
    type: uiActionTypes.LOGOUT
  };
}
export const boundLogout = () => dispatch(logout());

export function displayNotificationDrawer() {
  return {
    type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER
  };
}
export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

export function hideNotificationDrawer() {
  return {
    type: uiActionTypes.HIDE_NOTIFICATION_DRAWER
  };
}
export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export function loginSuccess() {
  return {
    type: uiActionTypes.LOGIN_SUCCESS
  };
}

export function loginFailure() {
  return {
    type: uiActionTypes.LOGIN_FAILURE
  };
}

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    const res = fetch('http://localhost:8564/login-success.json')
    .then((res) => {
      if (res.ok) {
        dispatch(loginSuccess());
      } else {
        throw new Error('failed');
      }
    })
    .catch((err) => dispatch(loginFailure()));
    return res;
  };
}
