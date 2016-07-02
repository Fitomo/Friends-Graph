var neo4j = require('neo4j');
// conects to db via enviormental variables defined in docker stack file (contains sensitive information)
exports.db = new neo4j.GraphDatabase(process.env.DB_URL);