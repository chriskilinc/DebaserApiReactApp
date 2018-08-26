import './index.css';
import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EventsContainer from './components/EventsContainer';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                
            ]
        }
    }

    fetchDebaserApi = (dateTo, dateFrom, venue) => {
        console.log(dateTo, dateFrom, venue);

        //  Build Fetch

        //  Fetch
        var fetch = "fetch";

    }

    handleSearch = (searchOptions) => {
        console.log(searchOptions);
    }

    render() {
        return (
            <div className="application">
                <Header />
                <SearchBar handleSearch={this.handleSearch} />
              <EventsContainer />
          </div>
      );
    }
}
