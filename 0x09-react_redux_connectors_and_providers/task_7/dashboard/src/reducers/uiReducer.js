import * as actions from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const initialUiState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

export function uiReducer(state=initialUiState, action={type: null}) {
  switch(action.type) {
    case actions.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);

    case actions.HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case actions.LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);

    case actions.LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);

    case actions.LOGIN:
      return state.set("user", action.user);
    
    case actions.LOGOUT:
      return state.merge({
        isUserLoggedIn: false,
        user: null
      });
    
    default:
      return state;
  }
}
