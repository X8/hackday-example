'use strict';

import http from 'superagent';

class Api {
  constructor(urlRoot) {
    this.urlRoot = urlRoot + '/leagues/1';
  }

  fetchFixtures() {
    return this.doGet('fixtures').then( body => body.league.fixtures );
  }

  fetchRoster(teamId) {
    return this.doGet('rosters/' + teamId);
  }

  fetchEvents(fixtureId) {
    return this.doGet(`leagues/1/fixtures/${fixtureId}/events`).then( body => body.league.fixture );
  }

  doGet(url) {
    return new Promise( (resolve, reject) =>
      http.get(`${this.urlRoot}/${url}`)
      .accept('application/json')
      .end( (error, response) => this.requestFinished(error, response, resolve, reject))
    );
  }

  requestFinished(error, response, resolve, reject) {
    if (error) {
      reject(error);
    } else {
      resolve(response.body);
    }
  }

}

export default Api;
