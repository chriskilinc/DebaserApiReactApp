import React, { Component } from 'react';
import '../css/SearchBar.css';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateFrom: "2018-01-01",
            dateTo: "2018-01-01",
            selectedVenue: "medis",
            venues: [
                {
                    id: "medis",
                    name: "Medis"
                },
                {
                    id: "slussen",
                    name: "Slussen"
                },
                {
                    id: "strand",
                    name: "Strand"
                }
            ]
        }
    }

    componentDidMount = () => {
        this.setState({
            dateFrom: new Date().toISOString().split('T')[0],
            dateTo: new Date().toISOString().split('T')[0]
        })
    }

    handleFromInput = event => {
        this.setState({
            dateFrom: event.target.value
        });
    };

    handleToInput = event => {
        this.setState({
            dateTo: event.target.value
        });
    };

    handleVenueInput = event => {
        this.setState({
            selectedVenue: event.target.value
        });
    };

    handleSearch = () => {
        let searchOptions = {
            from: this.state.dateFrom,
            to: this.state.dateTo,
            venue: this.state.selectedVenue
        }

        this.props.handleSearch(searchOptions);

    }

    render() {
        return (
            <section className="searchbar">
                <div className="option">
                    <p>Från:</p>
                    <input type="date" value={this.state.dateFrom} onChange={this.handleFromInput} />
                </div>

                <div className="option">
                    <p>Till:</p>
                    <input type="date" value={this.state.dateTo} onChange={this.handleToInput} />
                </div>

                <div className="option">
                    <p>Plats:</p>

                    <select onChange={this.handleVenueInput} value={this.state.selectedVenue}>
                        {this.state.venues.map(venue => <option key={venue.id} value={venue.id} >{venue.name}</option>)}
                    </select>
                </div>

                <div className="option">
                    <button href="#" className="btn btn--search" onClick={this.handleSearch}>Search</button>
                </div>
                
            </section>
        );
    }
}
