
const dbController = require('../controllers/DbController.js');
const imageController = require('../controllers/ImageController.js');

module.exports = (app) => {
  app.get('/api/createEntriesAndRelationships', dbController.createEntriesAndRelationships);
  app.get('/api/getFriendsGraph', dbController.getFriendsGraph);
  app.get('/api/getFriendsOfFriends', dbController.getFriendsOfFriends);
};
