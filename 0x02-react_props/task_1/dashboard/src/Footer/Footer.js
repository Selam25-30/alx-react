import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

function Footer(props) {
    return (
        <div className="App-footer">
            <p>
                Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
        </div>
    )
}

export default Footer;
