'use strict';

import React, { Component } from 'react';
import Fixtures from './Fixture/Fixtures';
import Roster from './Roster/Roster';
import Events from './Event/Events';
import LiveEvents from './Event/LiveEvents';
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

  showEvents(fixture) {
    this.setState({currentFixture: fixture});
  }

  addLiveEvent(event) {
    this.refs.liveEvents.addEvent(event);
  }

  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        <div className="row">
          <div className="col-md-6">
            <Fixtures fixtures={this.state.fixtures}
                      onTeamClicked={this.showRoster.bind(this)}
                      onEventsClicked={this.props.loadEvents.bind(this)}
            />
          </div>
          <div className="col-md-6">
            <Roster roster={this.state.currentRoster} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Events fixture={this.state.currentFixture} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <LiveEvents ref="liveEvents" />
          </div>
        </div>
      </div>
    );
  }

}

export default Gui;
