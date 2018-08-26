import '../css/EventsContainer.css';
import React, { Component } from 'react';
import Event from '../components/Event';

export default class EventsContainer extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="eventscontainer">
                {this.props.events.length > 0 ? <p>PÅGÅENDE EVENEMANG</p> : <p>SÖK EVENT</p>}
                
                <div className="events">

                    {this.props.eventsNotFound ? <p className="events--error">Tyvärr finns det ej några evenemang under denna tidsperiod, försök att söka under en annan tidsperiod!</p> : null}
                    {this.props.events.length > 0 ? this.props.events.map(event => <Event key={event.EventId} eventName={event.Event} subHead={event.SubHead} venue={event.Venue} eventDate={event.EventDate} room={event.Room} age={event.Age} time={event.Open} eventUrl={event.EventUrl} />) : null}



                </div>
                
            </div>
        );
    }
}
