'use strict';

import React, { Component } from 'react';
import Player from './Player';

class Event extends Component {

  renderPlayer(player) {
    if(!player) {
      return null;
    }

    return <Player player={player} />;
  }

  render() {
    var event = this.props.event,
        time = event.time;

    return (
      <li>
        ({time.minutes}:{time.seconds}) <strong> {event.name} </strong>
        {this.renderPlayer(event.player)} / {this.renderPlayer(event.recipient_player)}
      </li>
    );
  }
}

export default Event;
