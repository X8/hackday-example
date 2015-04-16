'use strict';

import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Table from 'react-bootstrap/lib/Table';

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
        <Table striped>
          <thead>
            <th>ID</th>
            <th>Date</th>
            <th>Match</th>
            <th>Stadium</th>
            <th></th>
          </thead>
          <tbody>
            {this.props.fixtures.map(this.renderFixture.bind(this))}
          </tbody>
        </Table>
      </Panel>
    );
  }
}
