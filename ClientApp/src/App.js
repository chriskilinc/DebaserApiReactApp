import './index.css';
import React, { Component } from 'react';
import Header from './components/Header';

export default class App extends Component {
  render() {
      return (
          <div className="application">
            <Header/>
            <p>Hello world</p>
        </div>
    );
  }
}
