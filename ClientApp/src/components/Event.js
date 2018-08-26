import '../css/Event.css';
import React, { Component } from 'react';

export default class Event extends Component {
    render() {
        return (
            <div className="event">
                <p className="event--header">2018-01-19 / Medis, Stora Scenen</p>
                <p className="event--status">SLUTSÅLD</p>
                <a href="#" className="event--title">The Xx + New Look</a>
                <p>Tid: 00-03 / Ålder: 20 år</p>
            </div>
        );
    }
}
