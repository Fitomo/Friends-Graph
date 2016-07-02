
const dbController = require('../controllers/DbController.js');

module.exports = (app) => {
  app.get('/api/createEntriesAndRelationships', dbController.createEntriesAndRelationships);
  app.get('/api/getFriendsGraph', dbController.getFriendsGraph);
  app.get('/api/getFriendsOfFriends', dbController.getFriendsOfFriends);
};
