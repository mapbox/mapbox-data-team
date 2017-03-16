# data-team
Quickly get a list of OSM usernames or OSM user IDs of the Mapbox Data Team using this module.

You can also get mappings between usernames and user IDs

## Install

Include
`npm install mapbox-data-team`


## Examples

### find() and findOne
Lets you find multiple entries in the datateam. 

``` Javascript
var dTeam = require('mapbox-data-team');

dTeam.find(searchFilter, resultFilter);
```


**Search by a particular a field**

``` Javascript
// should return an array of all matches
dTeam.find({ 'fName': 'Abhishek' });
```


**Search by uid**
``` Javascript
// should return an array of objects of all matches
dTeam.find({ 'uid': '2226712' });
```

**Shaping the result based on a shape object**
``` Javascript
// should return all matches with field github and fname only
dTeam.find({ 'uid': '2226712' }, ['github', 'fname']);
```


**Shaping the result with other_accounts**
``` Javascript
// should return all matches with field github and fname only
dTeam.find({}, ['github', 'other_accounts'] );
```

**Accepting a custom filter function.**
``` Javascript
// should return all matching with the function
dTeam.find( u => u.other_accounts.length > 0);

// should return first matching.
dTeam.findOne( u => u.other_accounts.length > 0);
```


### Older API 
_Note this might get deprecated in the future release_

```
var dataTeam = require('mapbox-data-team');

var allUsernames = dataTeam.getUsernames();
var allUserIds = dataTeam.getUserIds();
var allNames = dataTeam.getNames();
var fullDataTeamInfo = dataTeam.getEverything();

//Specific information
var poornimaUserName = dataTeam.getUsernamesFor('fname', 'Poornima'); //OR dataTeam.getUsernamesFor('fname', 'poornima'); OR dataTeam.getUsernamesFor('fname', 'poORnimA');

var poornimaUserId = dataTeam.getUserIdsFor('fname', 'Poornima'); //OR dataTeam.getUserIdsFor('fname', 'poornima'); OR dataTeam.getUserIdsFor('fname', 'PoORniMa');
```

## Add yourself to the module

* Get all your information from `http://hdyc.neis-one.org/user/<your-osm-username>`
* Use the following template to create an object that contains details from the `http://hdyc.neis-one.org/user/<your-osm-username>`
```
{
    'username': '<osm-username>',
    'uid': '<uid>',
    'fname': '<fname as on http://mapbox.com/team/>',
    'lname': '<lname as on http://mapbox.com/team/>',
    'fullname': '<fullname as on http://mapbox.com/team/>'
}
```
* Locate where your name needs to go in https://github.com/mapbox/mapbox-data-team/blob/master/data/team.js. The objects are arranged alphabetically by `fullname`. Place the object with your details at that place.
* If your name is NOT the last name in the list, add a comma after the object like:
```
{
    'username': '<osm-username>',
    'uid': '<uid>',
    'fname': '<fname as on http://mapbox.com/team/>',
    'lname': '<lname as on http://mapbox.com/team/>',
    'fullname': '<fullname as on http://mapbox.com/team/>'
},
```
