import { Map } from 'immutable';

export function filterTypeSelected(state) {
  return state.notifications.get('filter');
}

export function getNotifications(state) {
  return Map(state.notifications.get('notifications'));
}

const getNotificationsSelector = (state) => state.notifications;

export const getUnreadNotificationsByType = createSelector(
  getNotificationsSelector,
  (notifications) => {
    const messages = notifications.get("messages");
    const filter = notifications.get("filter");

    if (messages) {
      let filtered;

      if (filter === "URGENT") {
        filtered = messages
          .valueSeq()
          .filter(
            (value) =>
              value.get("isRead") === false && value.get("type") === "urgent"
          );
      } else {
        filtered = messages
          .valueSeq()
          .filter((value) => value.get("isRead") === false);
      }

      return filtered;
    }

    return messages;
  }
);
