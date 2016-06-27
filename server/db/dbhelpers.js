const db = require('./db.js').db;

exports.createEntriesAndRelationships = (objectOfUsers) => {
  if(typeof objectOfUsers !== 'object'){
    return 'not a valid input';
  }
  for(var key in objectOfUsers){
    db.cypher({
        queries: [{
          query: 'MERGE (a:USER {id:{id},friends:{friends}})',
          params: {
            id: key,
            friends: objectOfUsers[key].friends,
          },
        }],
    }, function(err, results){
      if(err){
        throw err;
      }
    });
  }
  exports.createRelationships(objectOfUsers);
}

exports.createRelationships = (objectOfUsers) => {
  for(var key in objectOfUsers){
    MATC (:Person)-[r:ACTED_IN]->(:Movie) delete r
    // delete existing relationships of user,
    // this is to account for users unfriending eachother
    db.cypher({
        queries: [{
          query: 'MATCH (:USER {id:{id}})-[r:KNOWS]->(:USER) delete r',
          params: {
            id: key,
          },
        }],
        }, function(err, results){
          if(err){
            throw err;
          }
        }
    );
    // iterate through
    for(var i = 0; i < objectOfUsers[key].friends.length; i++){
      db.cypher({
        queries: [{
          query: 'MATCH (a:USER {id:{id}}), (b:USER {id:{friendId}}) MERGE (a)-[:KNOWS]->(b) MERGE (b)-[:KNOWS]->(a)',
          params: {
            id: key,
            friendId: objectOfUsers[key].friends[i],
          },
        }],
        }, function(err, results){
          if(err){
            throw err;
          }
        }
      );
    }
  }
}

exports.getFriendsGraph = (userId) => {
  if(typeof userId !== 'string'){
    return 'not a valid input';
  }
  db.cypher({
    queries: [{
      query: 'MATCH (a:USER {id:{userId}})-[:KNOWS]->(b) RETURN b',
      params: {
        id: userId,
      },
    }],
    }, function(err, results){
      if(err){
        throw err;
      }
      console.log('matched user, b')
      return results;
    }
  );
}

exports.getFriendsOfFriends = (userId) => {
  if(typeof userId !== 'string'){
    return 'not a valid input';
  }
  db.cypher({
    queries: [{
      query: 'MATCH (a:USER {id:{userId}})-[:KNOWS]->(b) MATCH (b)-[:KNOWS]->(c) RETURN c',
      params: {
        id: userId,
      },
    }],
    }, function(err, results){
      if(err){
        throw err;
      }
      console.log('matched user, b')
      return results;
    }
  );
}
//MATCH (a:USER {id:'GARD2Q'})-[:KNOWS]-(b) MATCH (b)-[:KNOWS]-(c) RETURN c
