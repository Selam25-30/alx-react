import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component Tests', () => {
    let notificationItem;

    it('NotificationItem renders without crashing', () => {
        notificationItem = shallow(<NotificationItem />);
        expect(notificationItem).toBeDefined();
    });

    it('Passing type and value props to NotificationItem works as expected', () => {
        notificationItem = shallow(
            <NotificationItem type='default' value='test' />
        );
        expect(notificationItem.find('li').text()).toBe('test');
        expect(notificationItem.find('li').props('data-notification-type')).toBe('default')
    })

    it('Passing a dummy html prop renders the correct html', () => {
        notificationItem = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(notificationItem.find('li').props().dangerouslySetInnerHTML.__html).toBe('test');
    })
});