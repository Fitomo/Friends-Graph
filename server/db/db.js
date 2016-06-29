var neo4j = require('neo4j');
exports.db = new neo4j.GraphDatabase('http://neo4j:neo4j@localhost:7474');