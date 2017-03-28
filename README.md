# data-team
Quickly get a list of OSM usernames or OSM user IDs of the Mapbox Data Team using this module.

You can also get mappings between usernames and user IDs

## Install

Include
`npm install mapbox-data-team`


### Sample schema of user object

```Javascript
// sample user object
{
    'username': 'saikabhi',
    'uid': '3029661',
    'fname': 'Abhishek',
    'lname': 'Saikia',
    'fullname': 'Abhishek Saikia',
    'other_accounts': [
        {'username': 'saikabhi_sfimport', 'uid': '4893098'},
        {'username': 'saikabhi_LA_imports', 'uid': '4221399'}
    ]
}

```

## API

## getEverything()
``` Javascript
var dataTeam = require('mapbox-data-team');

dataTeam.getEverything();  // [ userObject1, userObject2, userObject3, ... ]
```

## getUsernames()
```
var allUsernames = dataTeam.getUsernames();
var allUserIds = dataTeam.getUserIds();
var allNames = dataTeam.getNames();
var fullDataTeamInfo = dataTeam.getEverything();

//Specific information
var poornimaUserName = dataTeam.getUsernamesFor('fname', 'Poornima'); //OR dataTeam.getUsernamesFor('fname', 'poornima'); OR dataTeam.getUsernamesFor('fname', 'poORnimA');

var poornimaUserId = dataTeam.getUserIdsFor('fname', 'Poornima'); //OR dataTeam.getUserIdsFor('fname', 'poornima'); OR dataTeam.getUserIdsFor('fname', 'PoORniMa');

```

### find() and findOne()
Lets you find one or many entries in the datateam.

**find(searchFilter, resultShape)** returns an array
**findOne(searchFilter, resultShape)** returns a single object

Params
**searchFilter** allows to filter the search results.
**resultShape** allows to shape the resulting object.

Usage:
``` Javascript

var dataTeam = require('mapbox-data-team');
dataTeam.find(searchFilter, resultShape);

// do empty search to get everything
dataTeam.find(); // [ userObject ]

// do an empty search to get only an array of uids
dataTeam.find(null, ["uid"]); // [ '3029661', '3057995', ...]


// search by a particular a field**
dTeam.find({ 'fName': 'Abhishek' });//  [ abhishekUserObject ]

dTeam.find({ 'uid': '2226712' });//  [ userObject ]

// shaping the result
dTeam.findOne({ 'uid': '2226712' }, ['github', 'fname']); // { github: 'dannykath', fname: 'Danny Aiquipa Pacheco' }

dTeam.find(null, ['github', 'uid'] ); // [ {github: 'Aaron Lidman', uid: '2985232'}, { github: 'aarthykc', uid: '2985232' }, ... ]

// custom filter function
dTeam.find( u => u.other_accounts.length > 0); // returns all objects which have u.other_accounts

dTeam.findOne( u => u.other_accounts.length > 0); // returns one item that first returned truth for the input function

```


See  [tests](https://github.com/mapbox/mapbox-data-team/blob/master/tests/test.js)  for sample use cases.

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
