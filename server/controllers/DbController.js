const createEntriesAndRelationships = require('../db/dbhelpers.js').createEntriesAndRelationships;
const getFriendsGraph = require('../db/dbhelpers.js').getFriendsGraph;
const getFriendsOfFriends = require('../db/dbhelpers.js').getFriendsOfFriends;

module.exports = {
  createEntriesAndRelationships: (req, res) => {
    // valid options are type, amountOfUsers, gender, difficulty, amountOfDays, bodyType
    const options = req.query;
    res.end(JSON.stringify(createEntriesAndRelationships(options.ObjectOfUsers)));
  },
  getFriendsGraph: (req, res) => {
    // valid options are user and x
    const options = req.query;
    res.end(JSON.stringify(getFriendsGraph(options.userId)));
  },
  getFriendsOfFriends: (req, res) => {
    // valid options are user and x
    const options = req.query;
    res.end(JSON.stringify(getFriendsOfFriends(options.userId)));
  },
};