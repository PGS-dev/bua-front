// React and React.Component
import React from 'react';

// Material UI
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

// Navigation link
import { Link } from 'react-router-dom';

// Stylesheets
import styles from './nav.scss';

export default () => (
  <AppBar
    title={<span>React starter</span>}
    className={styles.navbar}
    iconElementRight={
      <span>
        <Link to="/"><FlatButton label="Home" /></Link>
        <Link to="/secondpage"><FlatButton label="Second Page" /></Link>
      </span>
    }
  />
);
