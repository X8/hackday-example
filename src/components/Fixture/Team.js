'use strict';

import React, { Component } from 'react';

export default class Team extends Component {

  onClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    let team = this.props.team;

    return (
      <strong key={team.id}>
        <a href="#" onClick={this.onClick.bind(this)}>{team.name}</a>
        <span> {team.score} </span>
      </strong>
    );
  }
}
