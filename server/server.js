const express = require('express');
const app = express();
const userData = require('../testData/friends.js').data;
const dbHelpers = require('./db/dbhelpers.js');

dbHelpers.createEntriesAndRelationships(userData);

require('./routes/api-routes.js')(app);

app.get('*', (req, res) => {
  res.end('Invalid request');
});
app.listen(5000, () => {
  console.log('listening on port 5000');
});
