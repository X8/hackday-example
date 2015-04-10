'use strict';

import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Fixture from './Fixture';

export default class Fixtures extends Component {

  renderFixture(fixture) {
    return (
      <Fixture key={fixture.id}
               fixture={fixture}
               onTeamClicked={this.props.onTeamClicked}
               onEventsClicked={this.props.onEventsClicked}
      />
    );
  }

  render() {
    return (
      <Panel header="Fixtures">
        <ul>{this.props.fixtures.map(this.renderFixture.bind(this))}</ul>
      </Panel>
    );
  }
}
