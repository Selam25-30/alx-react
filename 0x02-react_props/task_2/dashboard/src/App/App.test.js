import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component Tests', () => {
    let app;

    beforeEach(() => {
        app = shallow(<App />);
    });

    it('Renders without crashing', () => {
        expect(app).toBeDefined();
    });

    it('Contains Notifications component', () => {
        expect(app.find('Notifications')).toHaveLength(1);
    });

    it('Contains Header component', () => {
        expect(app.find('Header')).toHaveLength(1);
    });

    it('Contains Login component', () => {
        expect(app.find('Login')).toHaveLength(1);
    });

    it('Contains Footer component', () => {
        expect(app.find('Footer')).toHaveLength(1);
    });
});