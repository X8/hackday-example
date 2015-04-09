'use strict';

import http from 'superagent';

class Api {
  constructor(urlRoot) {
    this.urlRoot = urlRoot;
  }

  fetchFixtures() {
    return this.doGet('leagues/1/fixtures').then( body => body.league.fixtures );
  }

  fetchRosters() {
    return this.doGet('leagues/1/rosters').then( body => body.league.rosters );
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
