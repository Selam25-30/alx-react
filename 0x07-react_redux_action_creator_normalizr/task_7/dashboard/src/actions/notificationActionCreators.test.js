import * as notifActionTypes from './notificationActionTypes';
import * as notifActionCreators from './notificationActionCreators';

describe('Testing notification Action Creators', () => {
  it('test makasread action', () => {
    const expected = {
      type: notifActionTypes.MARK_AS_READ,
      index: 1
    };
    expect(notifActionCreators.markAsAread(1)).toEqual(expected);
  });

  it('test setNotificationFilter action', () => {
    const expected = {
      type: notifActionTypes.SET_TYPE_FILTER,
      filter: "DEFAULT"
    };
    expect(notifActionCreators.setNotificationFilter(notifActionTypes.NotificationTypeFilters.DEFAULT)).toEqual(expected);
  });
});
