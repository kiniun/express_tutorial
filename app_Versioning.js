const _ = require('lodash');
let example = _.fill([1,2,3,4,5], "banana", 1, 4);
console.log(example);

//Semantic Versioning - standard that a lot of nodejs libraries follow.
//carat sign in version e.g.
//"lodash": "^4.17.11" major.minor.patch
//1st = major verion: breaking change version, compatibility issue may arise
//2nd # = minor version: adds new or deprecates old functionality
//3rd # - patch version
//carat ^ character: whenever this is there, it means no major updates is wanted but if there's minor or patch, download such pkgs
// ~ character: means only patch updates are not allowed
//without these characters only present version will exist in the nodejs project.
