'use strict';

import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Event from './Event';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderEvent(event) {
    var key = `${this.state.fixture.id}-${event.sequence}`;
    return (
      <Event key={event.sequence} event={event} />
    );
  }

  render() {
    if(!this.state.events) {
      return null;
    }

    var fixture = this.state.fixture,
        teams = fixture.teams.map( team => team.name ).join(" - "),
        events = this.state.events

    return (
      <Panel header={teams}>
        <ul>{events.map(this.renderEvent.bind(this))}</ul>
      </Panel>
    );
  }
}

export default Events;
