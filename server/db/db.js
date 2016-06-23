var neo4j = require('neo4j');
exports.db = new neo4j.GraphDatabase('http://neo4j:1234@localhost:7474');