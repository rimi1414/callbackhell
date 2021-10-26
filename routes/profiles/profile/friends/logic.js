'use strict';

const dataQueries = require('./data-querirs.js')

module.exports = {
    getFriends , createFriends
};

function getFriends(profileId, callback){
     dataQueries.selectFriends(profileId, friends =>{
        callback(friends)
    });
}

function createFriends(friend, friendId,callback ){
     dataQueries.insertFriends(friend, friendId, friends=>{
        callback(friends);
    } )
}