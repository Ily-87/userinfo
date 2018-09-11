exports.readJSON = function (countryFile, callback){


   var fs = require('fs');
//console.log('module started');

   var data = fs.readFile(countryFile, function (err, data) {

    if (err)

    {

      throw err;

     }

   data = JSON.parse(data)

   callback(data);

   });

};
