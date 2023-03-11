import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component Tests', () => {
    const app = shallow(<App />);

    it('Renders without crashing', () => {
        expect(app).toBeDefined();
    });

    it('Renders a div with the class "App-header"', () => {
        expect(app.find('.App-header')).toBeDefined();
    });

    it('Renders a div with the class "App-body"', () => {
        expect(app.find('.App-body')).toBeDefined();
    });

    it('Render a div with the class App-footer', () => {
        expect(app.find('.App-footer')).toBeDefined();
    });
});