'use strict';

import React, { Component } from 'react';

class Event extends Component {

  render() {
    var event = this.props.event,
        time = event.time;

    return (
      <li>
        ({time.minutes}:{time.seconds}) <strong> {event.description} </strong>
      </li>
    );
  }
}

export default Event;
