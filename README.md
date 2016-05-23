# data-team
Quickly get a list of OSM usernames or OSM user IDs of the Mapbox Data Team using this module.

You can also get mappings between usernames and user IDs

## Install

Include 
`npm install --save https://mapbox-npm.s3.amazonaws.com/package/data-team-0.1.0-d5b2eeb7898174641709c6577538f9c373e8c5b4.tgz`


## Examples

```
var dataTeam = require('data-team');

var allUsernames = dataTeam.getUsernames();
var allUserIds = dataTeam.getUserIds();
var allNames = dataTeam.getNames();
var fullDataTeamInfo = dataTeam.getEverything();

//Specific information
var poornimaUserName = dataTeam.getUsernamesFor('fname', 'Poornima');
var poornimaUserId = dataTeam.getUserIdsFor('fname', 'Poornima');
```
