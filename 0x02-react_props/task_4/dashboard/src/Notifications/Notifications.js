import { React, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import img from '../assets/close-icon.png';

const Notifications = ({ displayDrawer }) => {
    return (
        <Fragment>
            <div className='menuItem'>
                Your notifications
            </div>
            {displayDrawer &&
                <div className='Notifications'>
                    <button
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            cursor: 'pointer',
                            border: 'none',
                            backgroundColor: 'transparent',
                        }}
                        aria-label='Close'
                        onClick={() => console.log('Close button has been clicked')}
                    >
                        <img src={img} alt='close button' />
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem
                            type='default'
                            value='New course available'
                        />
                        <NotificationItem
                            type='urgent'
                            value='New resume available'
                        />
                        <NotificationItem
                            type='urgent'
                            html={getLatestNotification()}
                        />
                    </ul>
                </div>
            }
        </Fragment>
    )
}

Notifications.defaultProps = {
    displayDrawer: false,
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
};

export default Notifications;