'use strict';

const fs = require('fs'),

    errorMessage = 'no such table';

module.exports = {
    select,
    insert,
    remove,
    update,
    updateType
};

function select(tableName, id, callback) {
    _readFile((db) => {
        if (!db[tableName]) {
            return {msg: errorMessage};
        }
        let arr = db[tableName];
        if (id) {
            arr = _searchById(arr, id);
        }
        callback(arr);


    })
}

function insert(tableName, item, profileId, callback) {
    _readFile(db => {
        if (!db[tableName]) {
            return {msg: errorMessage};
        }
        if (!db[tableName][profileId]) {
            item.id = new Date().getTime();
            db[tableName].push(item);
            _writeFile(db);
            callback(item);
        }
        // obj.assign(db[tableName[item]]) / db[tableName].push(item)

        else {
            _foundIndexById(tableName, profileId,(fondIndex) => {
                db[tableName][fondIndex].friends.push(item);
                _writeFile(db);
                callback(db[tableName][fondIndex].friends)
            } )

        }
    })

}

function remove(tableName, id) {
    _readFile(db => {
        if (!db[tableName]) {
            return {msg: errorMessage};
        }

        db[tableName] = db[tableName].filter(row => row.id !== id);
        _writeFile(db);
    });

}


function update(tableName, itemId, item, callback) {
    _readFile(db => {
    if (!db[tableName]) {
        return {msg: errorMessage};
    }
    const rows = db[tableName];
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].id === itemId) {
            Object.assign(rows[i], item);
            _writeFile(db);
            callback(item);

        }
    }})
}

function _searchById(arr, id) {
    return arr.filter(item => item.id === id);
}

function _foundIndexById(table, id, callback) {
    _readFile((db) => {
        let arr = db[table]
        let foundIndex = undefined
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item.id == id) {
                foundIndex = i
               callback(foundIndex)
            }
        }
    })


}

function updateType(tableName, itemId, item) {
    if (!db[tableName]) {
        return {msg: errorMessage};
    }
    const rows = db[tableName];
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].id === itemId) {
            Object.assign(rows[i], item);
            return;

        }
    }
}

function _readFile(callback) {
    fs.readFile(__dirname + '/db-data.txt',
        {encoding: 'utf8', flag: 'r'},
        (err, db) => {
            if (err) {
                console.error(err)
            }
            callback(JSON.parse(db));
        });

}

function _writeFile(db) {
    db = JSON.stringify(db)
    fs.writeFile(__dirname + '/db-data.txt', db, (err) => {
        if (err) return console.error(err);
    });
}



