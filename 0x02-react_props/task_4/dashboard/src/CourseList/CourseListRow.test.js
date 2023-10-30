import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component Tests', () => {
    it('test the component renders one cell with colspan = 2 when textSecondCell does not exist and isHeader', () => {
        let wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first cell' />);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').prop('colSpan')).toEqual('2');
        expect(wrapper.find('th').text()).toBe('first cell');
    });

    it('test the component renders two cells when textSecondCell is present and isHeader', () => {
        let wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first cell' textSecondCell='second cell' />);
        expect(wrapper.find('th')).toHaveLength(2);
        expect(wrapper.find('th').at(0).text()).toEqual('first cell');
        expect(wrapper.find('th').at(1).text()).toEqual('second cell');
    });

    it('test the component renders correctly two td elements within a tr element and not isHeader', () => {
        let wrapper = shallow(<CourseListRow textFirstCell='first cell' textSecondCell='second cell' />);
        expect(wrapper.find('td')).toHaveLength(2);
        expect(wrapper.find('td').at(0).text()).toBe('first cell');
        expect(wrapper.find('td').at(1).text()).toBe('second cell');
    });
})