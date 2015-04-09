'use strict';

import React, { Component } from 'react';
import Fixtures from './Fixture/Fixtures';
import Roster from './Roster/Roster';
import Navigation from './Navigation/Navigation';

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
      <div className="container-fluid">
        <Navigation />
        <Fixtures fixtures={this.state.fixtures} onTeamClicked={this.showRoster.bind(this)} />
        <Roster roster={this.state.currentRoster} />
      </div>
    );
  }

}

export default Gui;
