Country Information App

//

// Part 1

// Create a Node.js application that does the following:

// - Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`

// - Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.json

// - Outputs information about that specific country. Must be in the following format:

//

Country: <country name>

Top Level Domain: <tld>
var pro = process.argv[2];

console.log(pro);

var fs = require('fs');
fs.readFile('countrydata.json', function (err, data) {

 if (err)

 {

   throw err;

  } var countries = JSON.parse(data);

console.log(countries);  var result = countries.find( country => country.name === pro );

console.log(result);console.log('Country :' + '<' + result.name + '>');

console.log('Top Level Domain :' + '<' + result.topLevelDomain + '>');

console.log('Alternative spellings' + result.altSpellings[2])

console.log('Japanese translation'+ result.translations.ja)

});
