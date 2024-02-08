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

export function setLoadingState(loading) {
  return {
    type: notifsActionTypes.SET_LOADING_STATE,
    loading
  };
}

export function setNotifications(data) {
  return {
    type: notifsActionTypes.FETCH_NOTIFICATIONS_SUCCESS,
    data
  };
}

export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('./notifications.json')
    .then(res => res.json())
    .then(data => dispatch(setNotifications(data)))
    .catch(err => err)
    .finally(() => dispatch(setLoadingState(false)));
    }
  }
