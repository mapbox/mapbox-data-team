'use strict';
var _ = require('underscore');
var jsonfile = require('jsonfile');

var team = _.extend({}, jsonfile.readFileSync('data/team.json'));
