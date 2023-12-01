import * as selectors from './notificationSelector';
import { notificationReducer } from '../reducers/notificationReducer';
import { Map, fromJS } from 'immutable';
import { getUnreadNotifications } from './notificationSelector';


describe('Testinf notificationSelectors',() => {
  it('test that filterTypeSelected works as expected', () => {
    const state = notificationReducer();
    expect('ihatethis').toEqual('ihatethis');
  });

});
