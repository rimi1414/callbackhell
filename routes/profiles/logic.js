'use strict';

const dataQueries = require('./data.queries');

module.exports = {
    getPofiles , createProfile
};

function getPofiles(query, callback){
     dataQueries.selectProfiles(query, profiles =>{
        callback(profiles)
    });
}
function createProfile(profile, callback){
    dataQueries.insertProfile(profile, callback)
}
