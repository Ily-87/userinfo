var pro = process.argv[2];


var dt = require('./myfirstmodule')



function log(countries){
//console.log(data);

// for loop for coiuntries
// daarin een if statment if countries[i].name === pro
// console.log

for(var i = 0; i < countries.length; i++){
  // console.log(countries[i].name);

  if (countries[i].name === pro){

       console.log('Country :' + '<' + countries[i].name + '>');

     console.log('Top Level Domain :' + '<' + countries[i].topLevelDomain + '>');



  }



}



 }

dt.readJSON('./countrydata.json', log)
