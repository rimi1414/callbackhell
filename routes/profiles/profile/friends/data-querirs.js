'use strict';

const tableName = 'profiles',
    database = require('../../../../middleware/database')
module.exports = {
    selectFriends, insertFriends
};

function selectFriends(profileId, callback) {
     database.select(tableName, profileId, profile =>{

      callback (profile[0].friends)
    });

}

function insertFriends(friend, friendId, callback){
     database.insert(tableName, friend, friendId, friends=>{
        callback (friends)
    })
}