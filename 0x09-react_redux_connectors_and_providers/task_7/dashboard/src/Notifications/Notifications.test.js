import React from 'react';
import { jest } from '@jest/globals';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';
import { mapStateToProps } from './Notifications';
import { fromJS } from 'immutable';
import configureStore from 'redux-mock-store'
import { initialState } from '../reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

fetchMock.mock('*', 200);
const mockStore = configureStore([thunk]);

describe("Testing the <Notifications /> Component", () => {
  
  let wrapper;
  let store;
  const listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store} ><Notifications displayDrawer={true}/></Provider>);
  });

  it("<Notifications /> is rendered without crashing", () => {
    expect(wrapper).toBeDefined();
  });
});

describe("Testing <Notification displayDrawer={true}/> ", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store} ><Notifications displayDrawer={true}/></Provider>);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
