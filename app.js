const express = require('express');
const EJS = require('ejs');
const app = express();
const port = 3000;

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.engine('html', EJS.renderFile);
const profileRoute = require('./routes/profilePageRoute.js')
const homepageRoute = require('./routes/homepageRoute.js')
const loginRoute = require('./routes/loginRoute.js');
const signinRoute = require('./routes/signInRoute.js');
const signupRoute = require('./routes/signUpRoute.js')

app.use('/', homepageRoute)
app.use('/profile', profileRoute)
app.use('/login', loginRoute)
app.use('/login/signin', signinRoute);  
app.use('/login/signup', signupRoute); 
     
  

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});