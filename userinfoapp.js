const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');
app.set('style', './style')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'))

app.get('/', (req, res) => {

    fs.readFile('users.json', (err, data)=>{

      const users = JSON.parse(data)

      console.log(users)
          if (err){
            throw (err)
          }
        res.render('users', {users: data})
      });

});

app.get('/userinfoapp', (req, res) => {
   res.render('userinfoapp');
});


app.post('/users', (req, res) => {

  fs.readFile('users.json', (err, data)=>{
    if (err){
      throw (err)
    }
    const users = JSON.parse(data)
    const search_input_first= req.body.firstname;
    const search_input_last= req.body.lastname;

console.log(search_input_first);
    for(let i = 0; i < users.length; i++) {
      console.log(users[i].firstname);
      if ((search_input_first.toUpperCase() === users[i].firstname.toUpperCase()) || (search_input_last.toUpperCase() === users[i].lastname.toUpperCase())) {
   res.render('resultspage', {user: users[i]})
  }
 }
  //  res.render('users', {users: data})
    });
});

app.get('/add', (req, res) => {
   res.render('add')
})

app.post('/add', (req,res) => {

 const newUsers = {firstname: req.body.firstname, lastname: req.body.lastname}
console.log(req);

fs.readFile('users.json', (err, data) => {
  if(err)
    throw (err)
      const users = JSON.parse(data)

      users.push(newUsers)
      console.log(users)
      fs.writeFile('users.json', JSON.stringify(users), (err)=> {
        if (err) throw err;


      })
  })
          res.redirect('/');
})







app.listen(3000, () => {
  console.log('userinfoapp')
});

//comapre what the user has sent with the json file and then ifelse return match kinfo
//
// app.get('/userroute', (req, res) => {
//     res.send('<body><h1>hello everyone!</h1></body>');
// });

// let ejs = require('ejs')
// people = ["Conor", "Bob", "Bere"]
// html = ejs.render('<%= people.join(", "); %>'), {people: people});
