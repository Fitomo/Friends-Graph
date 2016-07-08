const express = require('express');
const app = express();
const userData = require('../testData/friends.js').data;
const dbHelpers = require('./db/dbhelpers.js');

// uncomment to seed test data into DB on server start
// dbHelpers.createEntriesAndRelationships(userData);

require('./routes/api-routes.js')(app);
app.get('*', (req, res) => {
  res.end('Avaiable routes are /api/createEntriesAndRelationships, /api/getFriendsGraph, or /api/getFriendsOfFriends');
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
