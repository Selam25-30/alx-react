import * as uiActionCreators from './uiActionCreators';
import * as uiActionTypes from './uiActionTypes';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginSuccess, login, loginFailure } from './uiActionCreators';
const fetch = require("node-fetch");



describe('Testing uiActionCreators', () => {
  it('test login action creator', ()=> {
    const expected = {
      type: uiActionTypes.LOGIN,
      user : { email: 'test@test', password: 'test123' } 
    };
    expect(uiActionCreators.login('test@test', 'test123')).toEqual(expected);
  });

  it('test logout action creator', ()=> {
    expect(uiActionCreators.logout().type).toEqual(uiActionTypes.LOGOUT);
  });

  it('test displayNotificationDrawer  action creator', ()=> {
    expect(uiActionCreators.displayNotificationDrawer().type).toEqual(uiActionTypes.DISPLAY_NOTIFICATION_DRAWER);
  });

  it('test hideNotificationDrawer  action creator', ()=> {
    expect(uiActionCreators.hideNotificationDrawer().type).toEqual(uiActionTypes.HIDE_NOTIFICATION_DRAWER);
  });
});

describe('test loginRequest action', ()=> {
  it('verify that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS', ()=> {
    global.fetch = fetch;
    const mockstore = configureStore([thunk]);
    const initialState = {};
    const store = mockstore(initialState);
    const fetch_mock = fetchMock.mock('http://localhost:8564/login-success.json', 200);

    return store.dispatch(uiActionCreators.loginRequest('test@test', 'test'))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(login('test@test', 'test'));
      expect(actions[1]).toEqual(loginSuccess());
      fetch_mock.reset();
    });
  });

  it('verify that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE', ()=> {
    global.fetch = fetch;
    const mockstore = configureStore([thunk]);
    const initialState = {};
    const store = mockstore(initialState);
    const fetch_mock = fetchMock.mock('http://localhost:8564/login-success.json', 500);

    return store.dispatch(uiActionCreators.loginRequest('test@test', 'test'))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(login('test@test', 'test'));
      expect(actions[1]).toEqual(loginFailure());
      fetch_mock.reset();
    });
  });
});
