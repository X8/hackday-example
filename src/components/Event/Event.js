'use strict';

import React, { Component } from 'react';
import Player from './Player';

class Event extends Component {

  render() {
    var event = this.props.event,
        time = event.time;

    return (
      <li>
        ({time.minutes}:{time.seconds}) <strong> {event.name} </strong>
        <Player player={event.player} /> to <Player player={event.recipient_player} />
      </li>
    );
  }
}

export default Event;
