import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../reducers/rootReducer';
import { fromJS } from 'immutable';

const mockStore = configureStore([]);

describe("Testing <Footer /> component", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
  });

  it("Footer Component renders without crashing", () => {
    expect(wrapper.exists());
  });

  it("Footer compoenent render at the very least the text “Copyright”", () => {
    expect(wrapper.find("Copyright").at(0)).toBeDefined();
  });
});

describe('Testing Footer Component context and state', () => {
  let store;
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests that there is no link rendered when user is logged out', () => {
		store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

		expect(wrapper.find('a').length).toBe(0);
		expect(wrapper.find('a').exists()).toBe(false);
		expect(wrapper.text()).not.toContain('Contact us');

		wrapper.unmount();
	})

	it('Tests that there is a link rendered when user is logged in within context', () => {
		store = mockStore({ ...initialState, ui: initialState.ui.merge({user: {email: 't@t.t', password: 'tt'}})});
    const wrapper = mount(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

		expect(wrapper.find('a').length).toBe(1);
		expect(wrapper.find('a').exists()).toBe(true);
		expect(wrapper.text()).toContain('Contact us');

		wrapper.unmount();
	})
})
