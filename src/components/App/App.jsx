import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './app.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(App);
