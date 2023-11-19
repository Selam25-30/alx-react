import * as notifications from '../../../../notifications.json';

export function getAllNotificationsByUser(userId) {
  const selectedNots = notifications.default.filter((notif) => notif.author.id === userId);
  return selectedNots.map((notif => notif.context));
}
