import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component Tests', () => {
    const app = shallow(<App />);

    it('Renders without crashing', () => {
        expect(app).toBeDefined();
    });
});