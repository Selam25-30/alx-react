import * as uiActionTypes from './uiActionTypes';

export function login(email, password) {
  return {
    type: uiActionTypes.LOGIN,
    user: {email, password}
  };
}

export function logout() {
  return {
    type: uiActionTypes.LOGOUT
  };
}

export function displayNotificationDrawer() {
  return {
    type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER
  };
}

export function hideNotificationDrawer() {
  return {
    type: uiActionTypes.HIDE_NOTIFICATION_DRAWER
  };
}
