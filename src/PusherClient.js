'use strict';

class PusherClient {
  constructor(appId) {
    this.pusher = new Pusher(appId);
    this.channels = {};
  }

  subscribeMatchEvents(match, callback) {
    var channel = this.getChannel(`match-${match.id}`);
    channel.bind('event', callback);
  }

  getChannel(name) {
    if(!this.channels[name]) {
      this.channels[name] = this.pusher.subscribe(name);
    }

    return this.channels[name];
  }
}

export default PusherClient;
