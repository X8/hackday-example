'use strict';

import http from 'superagent';

const DEFAULT_GAMEWEEK = 30;

class Api {
  constructor(urlRoot) {
    this.urlRoot = urlRoot;
  }

  fetchFixtures(gameweek = DEFAULT_GAMEWEEK) {
    return this.doGet('fixtures/gameweek/' + gameweek);
  }

  fetchRoster(teamId) {
    return this.doGet('rosters/' + teamId);
  }

  fetchEvents(fixtureId) {
    return this.doGet(`fixtures/${fixtureId}/events`);
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
