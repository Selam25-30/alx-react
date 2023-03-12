import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notification Component Tests', () => {
    const notifications = shallow(<Notifications />);

    it('Renders Notifications component without crashing', () => {
        expect(notifications).toBeDefined();
    });

    it('Renders ul', () => {
        expect(notifications.find('ul')).toBeDefined();
    });

    it('Renders three list items', () => {
        expect(notifications.find('li')).toHaveLength(3);
    });

    it('Renders expected text', () => {
        expect(notifications.find('p').text()).toBe(
            'Here is the list of notifications'
        );
    });
});
