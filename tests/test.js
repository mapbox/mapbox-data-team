'use strict';

var test = require('tape');
var team = require('../index.js');
var json = require('./test-data.js');
var uniq = require('lodash.uniq');

test('getUsernames()', function (assert) {
    var usernames = ['Aaron Lidman', 'aarthy', 'oini', 'poornibadrinath', 'pratikyadav', 'ridixcr', 'saikabhi'];
    assert.deepEqual(team.getUsernames(json.team), usernames);
    assert.end();
});

test('getUserIds', function (assert) {
    var userIds = ['1597155', '2508151', '2905914', '2985232', '3029661', '3057995', '53073'];
    assert.deepEqual(team.getUserIds(json.team), userIds);
    assert.end();
});

test('getUsernamesFor(\'fname\',\'Oindrila\')', function (assert) {
    var username = ['oini'];
    assert.deepEqual(team.getUsernamesFor('fname', 'Oindrila', json.team), username);
    assert.end();
});

test('getUserIdsFor(\'fname\',\'Oindrila\')', function (assert) {
    var userId = ['3057995'];
    assert.deepEqual(team.getUserIdsFor('fname', 'Oindrila', json.team), userId);
    assert.end();
});

test('Lower case: getUserIdsFor(\'fname\',\'oindrila\')', function (assert) {
    var userId = ['3057995'];
    assert.deepEqual(team.getUserIdsFor('fname', 'oindrila', json.team), userId);
    assert.end();
});

test('getEverything()', function (assert) {
    assert.deepEqual(team.getEverything(json.team), json.team);
    assert.end();
});

test('getNames()', function (assert) {
    var names = ['Aaron Lidman', 'Aarthy Chandrasekhar', 'Abhishek Saikia', 'Oindrila Gupta', 'Pavel Baez', 'Poornima Badrinath', 'Pratik Yadav'];
    assert.deepEqual(team.getNames(json.team), names);
    assert.end();
});

test('check if the keys are all valid', function(assert) {
    var canonical = ["username","uid","fname","lname","fullname","github","other_accounts","mname"];
    var keys = [];
    team.getEverything().forEach(function (t) {
        Array.prototype.push.apply(keys, Object.keys(t));
    });
    keys = uniq(keys);
    assert.deepEqual(canonical, keys);
    assert.end();
});

test('check if the find works', function(assert) {
    assert.deepEqual(team.find(null, null, json.team), json.team);
    assert.end();
});

test('check if the findOne works', function (assert) {
    assert.deepEqual(team.findOne(null, null, json.team), json.team[0]);
    assert.end();
});

test('check if the find filters by id', function (assert) {
    var arron = {
        'username': 'Aaron Lidman',
        'uid': '53073',
        'fname': 'Aaron',
        'lname': 'Lidman',
        'fullname': 'Aaron Lidman',
        'other_accounts': [
            { 'username': 'aaron_imports', 'uid': '3685554' }
        ]
    }
    assert.deepEqual(team.find({uid: '53073'}, null, json.team), [arron]);
    assert.end();
});

test('check if the findOne filters by id', function (assert) {
    var arron = {
        'username': 'Aaron Lidman',
        'uid': '53073',
        'fname': 'Aaron',
        'lname': 'Lidman',
        'fullname': 'Aaron Lidman',
        'other_accounts': [
            { 'username': 'aaron_imports', 'uid': '3685554' }
        ]
    }
    assert.deepEqual(team.findOne({ uid: '53073' }, null, json.team), arron);
    assert.end();
});

test('check if the find filters by username', function (assert) {
    var oini = {
        'username': 'oini',
        'uid': '3057995',
        'fname': 'Oindrila',
        'lname': 'Gupta',
        'fullname': 'Oindrila Gupta'
    };
    assert.deepEqual(team.find({ username: 'oini' }, null, json.team), [oini]);
    assert.end();
});

test('check if the findOne filters by username', function (assert) {
    var oini = {
        'username': 'oini',
        'uid': '3057995',
        'fname': 'Oindrila',
        'lname': 'Gupta',
        'fullname': 'Oindrila Gupta'
    };
    assert.deepEqual(team.findOne({ username: 'oini' }, null, json.team), oini);
    assert.end();
});