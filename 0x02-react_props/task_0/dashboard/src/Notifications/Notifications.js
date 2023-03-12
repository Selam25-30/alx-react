import { React } from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import img from '../assets/close-icon.png';

const Notifications = () => {
    return (
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
                <li data='default'>New course available</li>
                <li data='urgent'>New resume available</li>
                <li data='urgent' dangerouslySetInnerHTML={getLatestNotification()} />
            </ul>
        </div>
    )
}

export default Notifications;