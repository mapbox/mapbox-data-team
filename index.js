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
            return (member[searchField] === value);
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

module.exports = {
    'getUsernames': getUsernames,
    'getNames': getNames,
    'getUserIds': getUserIds,
    'getUsernamesFor': getUsernamesFor,
    'getUserIdsFor': getUserIdsFor,
    'getEverything': getEverything
};
