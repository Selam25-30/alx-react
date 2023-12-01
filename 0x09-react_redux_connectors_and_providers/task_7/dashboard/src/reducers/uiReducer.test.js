import { uiReducer, initialUiState } from './uiReducer';
import * as actions from '../actions/uiActionTypes';

describe('Testing uiReducer', () => {
  it('verify the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const res = uiReducer();
    expect(res.toJS()).toStrictEqual(initialUiState.toJS());
  });

  it('verify  the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const res = uiReducer(undefined, {type: "SELECT_COURSE"});
    expect(res.toJS()).toStrictEqual(initialUiState.toJS());
  });

  it('verify the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const res = uiReducer(undefined, {type: actions.DISPLAY_NOTIFICATION_DRAWER});
    expect(res.toJS()).toStrictEqual({ ...initialUiState.toJS(), isNotificationDrawerVisible: true });
  });

  it('verify the state returned by the uiReducer function, when the action LOGIN is passed', () => {
    const res = uiReducer(undefined, {type: actions.LOGIN, user: {email:'test'}});
    expect(res.toJS()).toStrictEqual({ ...initialUiState.toJS(), user: {email:'test'}});
  });

  it('verify the state returned by the uiReducer function, when the action LOGOUT is passed', () => {
    const res = uiReducer(undefined, {type: actions.LOGOUT});
    expect(res.toJS()).toStrictEqual({ 
      ...initialUiState.toJS(),
      isUserLoggedIn: false,
      user: null
    });
  });
});
