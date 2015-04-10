'use strict';

import React from 'react/addons';
import Gui from './components/Gui';
import Api from './Api';

import _ from 'lodash';

const URL_ROOT = 'http://private-ecc71-hackday1.apiary-mock.com';

class App {
  constructor(domNode) {
    this.domNode = domNode;
    this.api = new Api(URL_ROOT);
  }

  start() {
    this.gui = this.buildGui();

    Promise.all([
        this.api.fetchFixtures(),
        this.api.fetchRosters()
    ]).then(this.prepareFixtures.bind(this))
      .catch(this.loadingFailed.bind(this));
  }

  prepareFixtures([fixtures, rosters]) {
    this.assignRostersToTeams(fixtures, rosters);
    this.gui.setState({fixtures: fixtures});
  }

  buildGui() {
    var guiElement = React.createElement(Gui);
    return React.render(guiElement, this.domNode);
  }

  loadingFailed(error) {
    alert('Cannot load data');
    console.log(error);
  }

  assignRostersToTeams(fixtures, rosters) {
    for(let fixture of fixtures) {
      for(let team of fixture.teams) {
        team.roster = _(rosters).find( roster => roster.team.id === team.id );
      }
    }
  }

}

export default App;
