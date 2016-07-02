var neo4j = require('neo4j');
exports.db = new neo4j.GraphDatabase(process.env.DB_URL);