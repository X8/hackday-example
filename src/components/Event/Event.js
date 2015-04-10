'use strict';

import React, { Component } from 'react';

class Event extends Component {

  render() {
    var event = this.props.event,
        time = event.time,
        player = event.player;

    return (
      <li>
        ({time.minutes}:{time.seconds}) <strong>{event.name}</strong> {player.first_name} {player.last_name}
      </li>
    );
  }
}

export default Event;
