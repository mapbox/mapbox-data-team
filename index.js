'use strict';

var team = require('./data/team.js').team;

function getData(returnField, searchField, value, json) {
    var teamJSON = json || team;
    if (!searchField) {
        return teamJSON.map(function (member) {
            return member[returnField];
        }).sort();
    } else {
        return teamJSON.filter(function (member) {
            return (member[searchField].toLowerCase() === value.toLowerCase());
        }).map(function (member) {
            return member[returnField];
        }).sort();
    }
}

function getUsernames(json) {
    return getData('username', null, null, json);
}

function getUserIds(json) {
    return getData('uid', null, null, json);
}

function getUsernamesFor(field, value, json) {
    return getData('username', field, value, json);
}

function getUserIdsFor(field, value, json) {
    return getData('uid', field, value, json);
}

function getNames(json) {
    return getData('fullname', null, null, json);
}

function getEverything(json) {
    return json || team;
}

function _find(query, returnShape, json, singular) {
    var teamJSON = json || team;
    var filtered = [];

    if (typeof query === 'function') {
        filtered = teamJSON.filter(query)
    } else {
        var keys = Object.keys(query);
        filtered = teamJSON.filter(function(t) {
            var keep = true;
            keys.forEach(function (k) {
                if (t.hasOwnProperty(k)) {
                    keep = keep && (t[k] === query[k]);
                }
            });
            return keep;
        });
    }

    if (returnShape instanceof Array && returnShape.length > 0) {
        filtered = filtered.map(function (d) {
            var shaped = {};
            returnShape.forEach(function (k) {
                if (d.hasOwnProperty(k) && d[k]) {
                    shaped[k] = d[k];
                }
            });
            return shaped;
        })
        .filter(function(d) {
            return d && Object.keys(d).length > 0;
        });
    }

    return singular ? filtered[0] : filtered;
}

function find(queryShape, returnShape, json) {
    return _find(queryShape || {}, returnShape, json, false);
}

function findOne(queryShape, returnShape, json) {
    return _find(queryShape || {}, returnShape, json, true);
}

module.exports = {
    'getUsernames': getUsernames,
    'getNames': getNames,
    'getUserIds': getUserIds,
    'getUsernamesFor': getUsernamesFor,
    'getUserIdsFor': getUserIdsFor,
    'getEverything': getEverything,
    'find': find,
    'findOne': findOne
};
