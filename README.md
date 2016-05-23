# data-team
Quickly get a list of OSM usernames or OSM user IDs of the Mapbox Data Team using this module.

You can also get mappings between usernames and user IDs

## Install

Include 
`npm install mapbox-data-team`


## Examples

```
var dataTeam = require('data-team');

var allUsernames = dataTeam.getUsernames();
var allUserIds = dataTeam.getUserIds();
var allNames = dataTeam.getNames();
var fullDataTeamInfo = dataTeam.getEverything();

//Specific information
var poornimaUserName = dataTeam.getUsernamesFor('fname', 'Poornima'); //OR dataTeam.getUsernamesFor('fname', 'poornima'); OR dataTeam.getUsernamesFor('fname', 'poORnimA'); 

var poornimaUserId = dataTeam.getUserIdsFor('fname', 'Poornima'); //OR dataTeam.getUserIdsFor('fname', 'poornima'); OR dataTeam.getUserIdsFor('fname', 'PoORniMa');
```
