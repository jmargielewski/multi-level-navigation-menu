import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './app.css';

class App extends Component {
  state = { content: 'Choose option in navigation in order to show content' };

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  onHandleClick = (content) => {
    this.setState({ content });
  };

  render() {
    const { content } = this.state;
    return (
      <div className="app">
        <Header onClick={this.onHandleClick} />
        <Main content={content} />
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(App);
