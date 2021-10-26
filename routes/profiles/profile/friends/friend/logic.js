'use strict';

const friendsDataQueries = require('../data-querirs')

module.exports = {
    getFriend

};

function getFriend(profileId, friendType){
    const friends = friendsDataQueries.selectFriends(profileId);
    const result = {};
        result[friendType] = friends[0][friendType]
    return result;
}
// function updateProfile(id, profile){
//     return dataQueries.updateProfile(id, profile)
// }
// function removeProfile (id) {
//     return dataQueries.deleteProfile(id)
// }