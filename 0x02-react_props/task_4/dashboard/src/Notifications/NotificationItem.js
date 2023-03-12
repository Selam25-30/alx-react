import PropTypes from 'prop-types';

function NotificationItem({ type='default', html, value }) {
    return (
        <li
            data-notification-type={type}
            dangerouslySetInnerHTML={html}
        >
           {value}
        </li>
    )
}

NotificationItem.propTypes = {
    html: PropTypes.shape({__html: PropTypes.string}),
    type: PropTypes.string,
    value: PropTypes.string,
}

export default NotificationItem;
