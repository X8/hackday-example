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

  showRoster(roster) {
    this.refs.roster.setState({roster: roster});
  }

  showEvents(fixture, events) {
    this.refs.events.setState({fixture: fixture, events: events});
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
                      onTeamClicked={this.props.loadRoster.bind(this)}
                      onEventsClicked={this.props.loadEvents.bind(this)}
            />
          </div>
          <div className="col-md-6">
            <Roster ref="roster" />
            <Events ref="events" />
            <LiveEvents ref="liveEvents" />
          </div>
        </div>
      </div>
    );
  }

}

export default Gui;
