'use strict';

import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Event from './Event';

class Events extends Component {

  renderEvent(event) {
    var key = `${this.props.fixture.id}-${event.sequence}`;
    return (
      <Event key={event.sequence} event={event} />
    );
  }

  render() {
    if(!this.props.fixture) {
      return null;
    }

    var fixture = this.props.fixture,
        teams = fixture.teams.map( team => team.name ).join(" - "),
        events = fixture.events;

    return (
      <Panel header={teams}>
        <ul>{events.map(this.renderEvent.bind(this))}</ul>
      </Panel>
    );
  }
}

export default Events;
