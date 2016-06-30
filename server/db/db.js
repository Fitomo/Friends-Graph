var neo4j = require('neo4j');
exports.db = new neo4j.GraphDatabase('http://neo4j:1234@neo4j:7474');