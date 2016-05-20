'use strict';

var team = require('./data/team.js').team;

function getData(returnField, searchField, value) {
    if (!searchField) {
        return team.map(function (member) {
            return member[returnField];
        }).sort();
    } else {
        return team.filter(function (member) {
            return (member[searchField] === value);
        }).map(function (member) {
            return member[returnField];
        }).sort();
    }
}

function getUsernames() {
    return getData('username');
}

function getUserIds() {
    return getData('uid');
}

function getUsernamesFor(field, value) {
    return getData('username', field, value);
}

function getUserIdsFor(field, value) {
    return getData('uid', field, value);
}

function getNames() {
    return getData('fullname');
}

function getEverything() {
    return team;
}

module.exports = {
    'getUsernames': getUsernames,
    'getNames': getNames,
    'getUserIds': getUserIds,
    'getUsernamesFor': getUsernamesFor,
    'getUserIdsFor': getUserIdsFor,
    'getEverything': getEverything
};
