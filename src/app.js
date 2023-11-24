//Definindo constantes
import express from 'express';
const app = express();
const port = 3000;

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.engine('html', renderFile);

//Definindo rotas
import profileRoute from './src/routes/profilePageRoute.js';
import homepageRoute from './src/routes/homepageRoute.js';
import loginRoute from './src/routes/loginRoute.js';
import signinRoute from './src/routes/signInRoute.js';
import signupRoute from './src/routes/signUpRoute.js';

//Configurando Rotas
app.use('/', homepageRoute)
app.use('/profile', profileRoute)
app.use('/login', loginRoute)
app.use('/login/signin', signinRoute);  
app.use('/login/signup', signupRoute); 

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});