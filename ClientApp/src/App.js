import './index.css';
import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  render() {
      return (
          <div className="application">
            <Header />
            <SearchBar />
        </div>
    );
  }
}
