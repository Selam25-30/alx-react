import logo from '../assets/logo.jpg';
import './Header.css';

function Header(props) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
        </header>
    )
}

export default Header;
