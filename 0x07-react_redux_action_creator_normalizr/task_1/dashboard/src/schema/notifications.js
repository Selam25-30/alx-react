import * as notifications from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
  const selectedNots = notifications.default.filter((notif) => notif.author.id === userId);
  return selectedNots.map((notif => notif.context));
}

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedNotifications = normalize(notifications.default, [notification]);
