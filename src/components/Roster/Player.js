'use strict';

import React, { Component } from 'react';

class Player {
  render() {
    var player = this.props.player;

    return (
      <li>
        {player.first_name} {player.last_name} ({player.position})
      </li>
    );
  }
}

export default Player;
