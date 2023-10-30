import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component Tests', () => {
    const login = shallow(<Login />);

    it('Renders without crashing', () => {
        expect(login).toBeDefined();
    });

    it('Renders 2 input tags', () => {
        expect(login.find('input')).toHaveLength(2);
    });

    it('Renders 2 label tags', () => {
        expect(login.find('label')).toHaveLength(2);
    });
});