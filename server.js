'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var ably = new require('ably').Realtime('ABLY-KEY');

var channel = ably.channels.get('sms-notification');

const server = app.listen(3000, () => {
  console.log(
    'Express server listening on port %d in %s mode',
    server.address().port,
    app.settings.env
  );
});

app.get('/inbound', (req, res) => {
  handleParams(req.query, res);
});

function handleParams(params, res) {
  if (!params.to || !params.msisdn) {
    console.log('This is not a valid inbound SMS message!');
  } else {
    console.log('Success');

    let incomingData = {
      messageId: params.messageId,
      from: params.msisdn,
      text: params.text,
      type: params.type,
      timestamp: params['message-timestamp']
    };

    channel.publish('new-sms', incomingData);
    res.send(incomingData);
  }
  res.status(200).end();
}
