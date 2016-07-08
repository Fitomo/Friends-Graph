const createEntriesAndRelationships = require('../db/dbhelpers.js').createEntriesAndRelationships;
const getFriendsGraph = require('../db/dbhelpers.js').getFriendsGraph;
const getFriendsOfFriends = require('../db/dbhelpers.js').getFriendsOfFriends;

module.exports = {
  createEntriesAndRelationships: (req, res) => {
    const user = {};
    const friendsList = JSON.parse(req.query.friends);
    user[req.query.id] = {'friends': friendsList};
    res.end(JSON.stringify(createEntriesAndRelationships(options)));
  },
  getFriendsGraph: (req, res) => {
    const options = req.query;
    res.end(JSON.stringify(getFriendsGraph(options.id)));
  },
  getFriendsOfFriends: (req, res) => {
    const options = req.query;
    res.end(JSON.stringify(getFriendsOfFriends(options.id)));
  },
};