import * as notifsActionTypes from './notificationActionTypes';

export function markAsAread(index) {
  return {
    type: notifsActionTypes.MARK_AS_READ,
    index
  };
}
export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

export function setNotificationFilter(filter) {
  return {
    type: notifsActionTypes.SET_TYPE_FILTER,
    filter
  };
}
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));
