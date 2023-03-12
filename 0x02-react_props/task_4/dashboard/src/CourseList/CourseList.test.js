import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component Tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
    });

    it('Renders <CourseList /> without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('Renders five different rows', () => {
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
});