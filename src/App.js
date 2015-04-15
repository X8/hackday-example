'use strict';

import React from 'react/addons';
import Gui from './components/Gui';
import Api from './Api';
import PusherClient from './PusherClient';

import _ from 'lodash';

const URL_ROOT = 'http://private-ecc71-hackday1.apiary-mock.com';
const PUSHER_APP_ID = 'c92b97d8691c214faef8';

class App {
  constructor(domNode) {
    this.domNode = domNode;
    this.api = new Api(URL_ROOT);
    this.pusher = new PusherClient(PUSHER_APP_ID);
  }

  start() {
    this.gui = this.buildGui();

    this.api.fetchFixtures()
      .then(this.prepareFixtures.bind(this))
      .catch(this.loadingFailed.bind(this));
  }

  prepareFixtures(fixtures) {
    this.gui.setState({fixtures: fixtures});
    fixtures.forEach(this.subscribeMatchEvents.bind(this));
  }

  buildGui() {
    var guiElement = React.createElement(Gui, {
      loadEvents: this.loadEvents.bind(this),
      loadRoster: this.loadRoster.bind(this)
    });
    return React.render(guiElement, this.domNode);
  }

  loadingFailed(error) {
    alert('Cannot load data');
    console.log(error);
  }

  loadRoster(team) {
    this.api.fetchRoster(team.id).then( roster => this.gui.showRoster(roster) );
  }

  loadEvents(fixture) {
    this.api.fetchEvents(fixture.id).then( (fixtureWithEvents) => this.gui.showEvents(fixtureWithEvents) )
  }

  subscribeMatchEvents(fixture) {
    this.pusher.subscribeMatchEvents(fixture, this.gui.addLiveEvent.bind(this.gui));
  }

}

export default App;
