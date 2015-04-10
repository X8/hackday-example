'use strict';

import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Event from './Event';

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  addEvent(event) {
    var allEvents = this.state.events.concat([event]);
    this.setState({events: allEvents});
  }

  clear() {
    this.setState({events: []});
  }

  renderEvent(event) {
    return (
      <Event event={event} />
    );
  }

  render() {
    return (
      <Panel header="Live events">
        <Button onClick={this.clear.bind(this)}>Clear</Button>
        <ul>{this.state.events.map(this.renderEvent.bind(this))}</ul>
      </Panel>
    );
  }
}

export default Events;
