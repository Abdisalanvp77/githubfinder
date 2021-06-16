import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </Fragment>
    );
  }
}

export default App;

/**
 * jsx - javascript syntactic extensions
 * fragments are used when you dont want to display divs in the dom
 *
 *
 * */
