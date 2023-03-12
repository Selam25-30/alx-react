import * as actions from '../actions/uiActionTypes';

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

export function uiReducer(state=initialState, action={type: null}) {
  switch(action.type) {
    case actions.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true
      };

    case actions.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true
      };

    case actions.LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false
      };
    
    case actions.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false
      };
    
    default:
      return state;
  }
}
