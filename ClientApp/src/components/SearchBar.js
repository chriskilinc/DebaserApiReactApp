import React, { Component } from 'react';
import '../css/SearchBar.css';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateFrom: "2018-01-01",
            dateTo: "2018-01-01",
            venues: [
                {
                    id: "medis",
                    name: "Medborgarplatsen"
                },
                {
                    id: "slussen",
                    name: "Slussen"
                }
            ]
        }
    }

    componentDidMount = () => {
        var dateObj = new Date();
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

    render() {
        return (
            <section className="searchbar">
                <div className="option">
                    <p>From:</p>
                    <input type="date" value={this.state.dateFrom} onChange={this.handleFromInput} />
                </div>

                <div className="option">
                    <p>To:</p>
                    <input type="date" value={this.state.dateTo} onChange={this.handleToInput} />
                </div>

                <div className="option">
                    <p>Venue:</p>

                    <select>
                        {this.state.venues.map(venue => <option key={venue.id} value={venue.id}>{venue.name}</option>)}
                    </select>
                </div>

                
                
            </section>
        );
    }
}
