import './index.css';
import React, { Component } from 'react';
import Header from './components/Header';
import SerchBar from './components/SearchBar';

export default class App extends Component {
  render() {
      return (
          <div className="application">
              <Header />
              <SearchBar />
            <p>Hello world</p>
        </div>
    );
  }
}
