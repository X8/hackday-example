'use strict';

import React, { Component } from 'react';
import Team from './Team';
import moment from 'moment';

export default class Fixture extends Component {
  render() {
    let fixture = this.props.fixture,
        date    = moment(fixture.scheduled_at),
        stadium = fixture.stadium.name,
        state   = fixture.status.name,
        teams   = this.props.fixture.teams.map(
            team => <Team key={team.id} team={team} onClick={this.props.onTeamClicked.bind(this, team)} />
        );

    return (
      <li>
        {date.format("MMM Do HH:MM")} {teams} @{stadium} ({state})
      </li>
    );
  }
}
