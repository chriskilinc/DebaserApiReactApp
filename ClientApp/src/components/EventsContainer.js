import '../css/EventsContainer.css';
import React, { Component } from 'react';
import Event from '../components/Event';

export default class EventsContainer extends Component {
    render() {
        return (
            <div className="eventscontainer">
                <p>PÅGÅENDE EVENEMANG</p>
                <div className="events">
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />

                </div>
                
            </div>
        );
    }
}
