'use strict';

import React, { Component } from 'react';
import Fixture from './Fixture';

export default class Fixtures extends Component {

  render() {
    return (
      <ul>{this.props.fixtures.map( fixture => <Fixture fixture={fixture} onTeamClicked={this.props.onTeamClicked} /> )}</ul>
    );
  }
}
