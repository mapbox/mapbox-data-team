'use strict';

var test = require('tape');
var team = require('./index.js');

test('#### getUsernames()', function (assert) {
    var usernames = ['Aaron Lidman', 'Arunasank', 'Chetan_Gowda', 'Jothirnadh', 'Luis36995', 'PlaneMad', 'RichRico', 'Rub21', 'aarthy', 'andygol', 'bkowshik', 'calfarome', 'dannykath', 'ediyes', 'geohacker', 'jinalfoflia', 'karitotp', 'lxbarth', 'manings', 'nammala', 'nikhilprabhakar', 'oini', 'poornibadrinath', 'pratikyadav', 'ramyaragupathy', 'ridixcr', 'ruthmaben', 'saikabhi', 'samely', 'sanjayb', 'shvrm', 'srividya_c'];
    assert.deepEqual(team.getUsernames(), usernames);
    assert.end();
});

test('#### getUserIds', function (assert) {
    var userIds = ['1087876', '1240849', '1306', '146675', '1597155', '1829683', '2015224', '2115749', '2219338', '2226712', '2306749', '2477516', '2508151', '2511706', '2512300', '2554698', '261012', '2644101', '2748195', '2823295', '2835928', '2847988', '2905914', '2985232', '3029661', '3057995', '3272286', '3479270', '510836', '53073', '589596', '94578'];
    assert.deepEqual(team.getUserIds(), userIds);
    assert.end();
});

test('#### getUsernamesFor(\'fname\',\'Oindrila\')', function (assert) {
    var username = ['oini'];
    assert.deepEqual(team.getUsernamesFor('fname', 'Oindrila'), username);
    assert.end();
});

test('#### getUserIdsFor(\'fname\',\'Oindrila\')', function (assert) {
    var userId = ['3057995'];
    assert.deepEqual(team.getUserIdsFor('fname', 'Oindrila'), userId);
    assert.end();
});

test('#### getEverything()', function (assert) {
    var everything = require('./data/team.js').team;
    assert.deepEqual(team.getEverything(), everything);
    assert.end();
});

test('#### getNames()', function (assert) {
    var names = ['Aaron Lidman', 'Aarthy Chandrasekhar', 'Abhishek Saikia', 'Alex Barth', 'Andrey Golovin', 'Arun Ganesh', 'Aruna Sankaranarayanan', 'Bhargav Kowshik', 'Cesar Alfaro', 'Chethan Gowda', 'Danny Aiquipa Pacheco', 'Edith Quispe', 'Eliane Joyo Meneses', 'Jinal Foflia', 'Jothirnadh Sai', 'Karito Tenorio Palomino', 'Krishna Nammala', 'Luis Alanya Ortega', 'Maning Sambale', 'Nikhil Prabhakar', 'Oindrila Gupta', 'Pavel Baez', 'Poornima Badrinath', 'Pratik Yadav', 'Ramya Ragupathy', 'Richman Pariona Torres', 'Ruben Lopez Mendoza', 'Ruth Maben', 'Sajjad Anwar', 'Sanjay Bhangar', 'Sivaram Ramachandran', 'Srividya Bharadwaj'];
    assert.deepEqual(team.getNames(), names);
    assert.end();
});

