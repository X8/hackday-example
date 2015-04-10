'use strict';

import React, { Component } from 'react';

class Player {
  render() {
    var player = this.props.player;

    return (
      <span>{player.first_name} {player.last_name}</span>
    );
  }
}

export default Player;
