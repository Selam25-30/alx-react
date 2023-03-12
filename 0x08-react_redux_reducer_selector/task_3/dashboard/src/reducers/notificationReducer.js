import * as actions from '../actions/notificationActionTypes';

export const initialState= {
  notifications: [],
  filter: actions.NotificationTypeFilters
};

export function notificationReducer(state=initialState, action={type: null}) {
  switch(action.type) {
    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      return {
        filter: actions.NotificationTypeFilters.DEFAULT,
        notifications: action.data.map((item) => ({...item, isRead: false}))
      };

    case actions.MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((item) => item.id == action.index ? {...item, isRead: true} : {...item})
      };

    case actions.SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    
    default:
      return state;
  }
}
