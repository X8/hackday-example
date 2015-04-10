'use strict';

import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Player from './Player';

class Roster {
  render() {
    if(!this.props.roster) {
      return null;
    }

    var roster  = this.props.roster,
        team    = roster.team,
        players = roster.players,
        manager = roster.manager;

    return (
      <Panel header={team.name}>
        <p>Manager: {manager.first_name} {manager.last_name}</p>
        <ul>
          {players.map( player => <Player key={player.id} player={player} /> )}
        </ul>
      </Panel>
    );
  }
}

export default Roster;
