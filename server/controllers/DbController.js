const createEntriesAndRelationships = require('../db/dbhelpers.js').createEntriesAndRelationships;
const getFriendsGraph = require('../db/dbhelpers.js').getFriendsGraph;
const getFriendsOfFriends = require('../db/dbhelpers.js').getFriendsOfFriends;

module.exports = {
  createEntriesAndRelationships: (req, res) => {
    const options = req.query;
    res.end(JSON.stringify(createEntriesAndRelationships(options.ObjectOfUsers)));
  },
  getFriendsGraph: (req, res) => {
    const options = req.query;
    res.end(JSON.stringify(getFriendsGraph(options.userId)));
  },
  getFriendsOfFriends: (req, res) => {
    const options = req.query;
    res.end(JSON.stringify(getFriendsOfFriends(options.userId)));
  },
};