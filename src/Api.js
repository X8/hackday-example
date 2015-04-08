'use strict';

import http from 'superagent';

class Api {

  fetchFixtures() {
    return this.doGet('/api/leagues/1/fixtures').then( body => body.league.fixtures );
  }

  fetchRosters() {
    return this.doGet('/api/leagues/1/rosters').then( body => body.league.rosters );
  }

  doGet(url) {
    return new Promise( (resolve, reject) =>
      http.get(url)
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
