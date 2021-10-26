'use strict';

const tableName ='profiles',
database = require('../../middleware/database')
module.exports = {
   selectProfiles, insertProfile
};

function  selectProfiles(query, callback){
   database.select(tableName, undefined, profiles => {
      if(query.ageIsGreater){
          profiles = profiles.filter(profile => profile.age >= query.ageIsGreater)
      }
      if(query.ageIsLower){
          profiles = profiles.filter(profile => profile.age < query.ageIsLower)
      }
      callback(profiles);

  });

}
function insertProfile(profile, callback){
   database.insert(tableName, profile, undefined, result =>{
       callback(result)
   })
}