var request = require('request'),
    Pusher = require('pusher');

var pusher = new Pusher({
  appId: '115278',
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET
});

function startPusher(error, response, body) {
  var response = JSON.parse(body),
      match = response.league.fixture,
      events = match.events;


  events.forEach(function(event, index) {
    setTimeout(sendEvent.bind(null, match, event), 2000 * index);
  });
}

function sendEvent(match, event) {
  var channelName = "match-" + match.id;

  console.log("Sending event #" + event.sequence + " Channel: " + channelName);
  pusher.trigger(channelName, "event", event);
}

request('http://private-ecc71-hackday1.apiary-mock.com/leagues/1/fixtures/1/events', startPusher)
