'use strict';

import React, { Component } from 'react';
import Fixtures from './Fixture/Fixtures';
import Roster from './Roster/Roster';

import _ from 'lodash';

class Gui extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: []
    };
  }

  showRoster(team) {
    this.setState({currentRoster: team.roster});
  }

  render() {
    return (
      <div className="app">
        <h1>Football Hackday</h1>
        <Fixtures fixtures={this.state.fixtures} onTeamClicked={this.showRoster.bind(this)} />
        <Roster roster={this.state.currentRoster} />
      </div>
    );
  }

}

export default Gui;
