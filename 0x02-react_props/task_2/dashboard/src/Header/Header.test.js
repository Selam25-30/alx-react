import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component Tests', () => {
    const header = shallow(<Header />);

    it('Renders without crashing', () => {
        expect(header).toBeDefined();
    });

    it('Contains an img and h1 elements', () => {
        expect(header.find('img')).toBeDefined();
        expect(header.find('h1')).toBeDefined();
    });
});