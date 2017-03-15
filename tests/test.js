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

test('check if the find filters with a function', function (assert) {
    var result = team.find(t => t.username.charAt('1') === 'a', null, json.team);
    assert.deepEqual(result.map(u => u.username), ['Aaron Lidman', 'aarthy', 'saikabhi']);
    assert.end();
});

test('check if the findOne filters with a function', function (assert) {
    var saikabhi = {
        'username': 'saikabhi',
        'uid': '3029661',
        'fname': 'Abhishek',
        'lname': 'Saikia',
        'fullname': 'Abhishek Saikia',
        'other_accounts': [
            { 'username': 'saikabhi_sfimport', 'uid': '4893098' },
            { 'username': 'saikabhi_LA_imports', 'uid': '4221399' }
        ]
    };
    var result = team.findOne(t => t.username.charAt('0') === 's', null, json.team);
    assert.deepEqual(result, saikabhi);
    assert.end();
});

test('check if the find shapes', function (assert) {
    var result = team.find({}, ['username', 'uid'], json.team);
    assert.deepEqual(result, json.team.map(d => ({username: d.username, uid: d.uid })));
    assert.end();
});

test('check if the find shaped other_accounts', function (assert) {
    var result = team.find({}, ['other_accounts'], json.team);
    var expected = [
        {'other_accounts': [
            { 'username': 'aaron_imports', 'uid': '3685554' }
        ]},
       { 'other_accounts': [
            { 'username': 'saikabhi_sfimport', 'uid': '4893098' },
            { 'username': 'saikabhi_LA_imports', 'uid': '4221399' }
        ]}
    ]
    assert.deepEqual(result,expected );
    assert.end();
});

test('check if the find shaped other_accounts and username', function (assert) {
    var result = team.find(d => d.other_accounts, ['other_accounts', 'username'], json.team);
    var expected = [
        {
            'username': 'Aaron Lidman',
            'other_accounts': [
                { 'username': 'aaron_imports', 'uid': '3685554' }
            ]
        },
        {
            'username': 'saikabhi',
            'other_accounts': [
                { 'username': 'saikabhi_sfimport', 'uid': '4893098' },
                { 'username': 'saikabhi_LA_imports', 'uid': '4221399' }
            ]
        }
    ]
    assert.deepEqual(result, expected);
    assert.end();
});

test('check if the findOne shapes', function (assert) {
    var result = team.findOne(t => t.username.charAt('0') === 's', ['username', 'uid'], json.team);
    assert.deepEqual(result, { username: 'saikabhi', uid: '3029661'});
    assert.end();
});

test('check if the find shapes incorrect keys', function (assert) {
    var result = team.find({}, ['usernam'], json.team);
    assert.deepEqual(result, []);
    result = team.find({username: 'aarthy'}, ['usernam'], json.team);
    assert.deepEqual(result, []);
    assert.end();
});

test('check if the find shape works with  empty array', function (assert) {
    var result = team.find({}, [], json.team);
    assert.deepEqual(result, json.team);
    assert.end();
});
