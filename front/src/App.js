import React from 'react';
import { connect } from 'react-redux';
import Routes from './router';

import './global.css'

class App extends React.Component {
  render() {
    return (
      <Routes />
    ); 
  }
}

const mapState = store => ({
  userData: store.userState
})

export default connect(mapState)(App);