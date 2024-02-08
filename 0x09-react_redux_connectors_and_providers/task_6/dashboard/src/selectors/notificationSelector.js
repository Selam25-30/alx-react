import { Map } from 'immutable';

export function filterTypeSelected(state) {
  return state.notifications.get('filter');
}

export function getNotifications(state) {
  return Map(state.notifications.get('notifications'));
}

export function getUnreadNotifications(state) {
  return Map(state.notifications.get('messages')).valueSeq().filter((item => !item.isRead));
}
