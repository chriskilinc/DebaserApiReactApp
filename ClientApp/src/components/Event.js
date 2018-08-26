import '../css/Event.css';
import React, { Component } from 'react';

export default class Event extends Component {
    render() {
        return (
            <div className="event">
                <p className="event--header">{this.props.eventDate} / {this.props.venue}, {this.props.room}</p>
                <p className="event--status">{this.props.status}</p>
                <a href={this.props.eventUrl} className="event--title">{this.props.eventName}  {this.props.subHead}</a>
                <p>Tid: {this.props.time} / Ålder: {this.props.age}</p>
            </div>
        );
    }
}
