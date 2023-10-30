import { Fragment } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';

function App({ isLoggedIn }) {
  return (
    <Fragment>
          <Notifications />
    <div className="App">
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
    </Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
