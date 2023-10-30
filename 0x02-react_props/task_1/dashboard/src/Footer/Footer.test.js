import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component Tests', () => {
    const footer = shallow(<Footer />);

    it('Renders without crashing', () => {
        expect(footer).toBeDefined();
    });

    it('Renders the text "Copyright"', () => {
        expect(footer.find('p').text()).toBe(/Copyright/);
    });
});