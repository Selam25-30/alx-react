import * as notifsActionTypes from './notificationActionTypes';

export function markAsAread(index) {
  return {
    type: notifsActionTypes.MARK_AS_READ,
    index
  };
}

export function setNotificationFilter(filter) {
  return {
    type: notifsActionTypes.SET_TYPE_FILTER,
    filter
  };
}
