'use strict';

import React, { Component } from 'react';
import Fixtures from './Fixture/Fixtures';
import Roster from './Roster/Roster';
import Navigation from './Navigation/Navigation';

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
        <div className="row">
          <div className="col-md-4">
            <Fixtures fixtures={this.state.fixtures} onTeamClicked={this.showRoster.bind(this)} />
          </div>
          <div className="col-md-4">
            <Roster roster={this.state.currentRoster} />
          </div>
        </div>
      </div>
    );
  }

}

export default Gui;
