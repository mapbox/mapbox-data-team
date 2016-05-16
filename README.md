# data-team
Require this module to quickly obtain a list of OSM usernames or OSM user IDs of the Mapbox Data Team.

You can also get mappings between usernames and user IDs

## Install

Include 
`npm install --save https://mapbox-npm.s3.amazonaws.com/package/data-team-0.1.0-d5b2eeb7898174641709c6577538f9c373e8c5b4.tgz`


## Examples

```
var dataTeam = require('data-team');
var usernames = dataTeam.usernames;
var userIDs = dataTeam.IDs;
var poornimaUserID = dataTeam.userIDFromUsername.poornibadrinath;
var dataTeamMemberFromUserID = dataTeam.usernameFromUserID["2015224"];
```
