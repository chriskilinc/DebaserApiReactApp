import './index.css';
import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EventsContainer from './components/EventsContainer';
import axios from 'axios';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                
            ],
            eventsNotFound: false,
        }
        
    }

    fetchDebaserApi = (SearchOptions) => {
        axios.post('api/Events/GetEvents/', SearchOptions)
            .then(response => {
                console.log(response.data)
                this.setState({
                    events: response.data,
                    eventsNotFound: false
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    eventsNotFound: true
                })
            })
    }


    handleSearch = (searchOptions) => {
        console.log(searchOptions);
        this.setState({
            eventsNotFound: false
        })
        this.fetchDebaserApi(searchOptions);
    }

    render() {
        return (
            <div className="application">
                <Header />
                <SearchBar handleSearch={this.handleSearch} />
                <EventsContainer events={this.state.events} eventsNotFound={this.state.eventsNotFound} />
          </div>
      );
    }
}
