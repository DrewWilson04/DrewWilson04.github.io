const accountSid = 'AC814cb1aee3d66d07a837af64a114f5e3';
const authToken = 'c695ff06cdb5165ec8bfc7b7c0e6bdd5';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi there!', from: '+13392183092', to: '+9376684122'})
      .then(message => {console.log(message.sid)});