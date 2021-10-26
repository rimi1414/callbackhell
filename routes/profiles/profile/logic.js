'use strict';

const dataQueries = require('./data-querirs.js')

module.exports = {
    getPofile, updateProfile, removeProfile, updateProfileType
};

function getPofile(id, callback) {
  dataQueries.selectProfile(id, profile =>{
      callback(profile)
    });
}

function updateProfile(id, profile, callback) {
    dataQueries.updateProfile(id, profile, profiles => {
        callback(profiles)
    })
}

function removeProfile(id) {
    return dataQueries.deleteProfile(id)
}

function updateProfileType(id, profile) {
    return dataQueries.updateProfileType(id, profile)
}

