//Definindo constantes
import express from 'express';
const app = express();
const port = 3000;

import "../config/database.js";
import mongoose from 'mongoose';


import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "connect-flash";

//Gera o segredo de sessão de acordo com a quantidade de caracteres que for conveniente
function generateSessionSecrect(length){
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let secrect = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    secrect += charset[randomIndex];
  }
  return secrect;
}
//Indica a quantidade de caracteres o segredo de sessão terá
const sessionSecret = generateSessionSecrect(21);

const sessionOpt = session({
  secret: sessionSecret,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  sabeUnintialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOpt);
app.use(flash());

//Devido a utilização do módulo ES, foi necessário a personalização da variaável '__dirname'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Permite requisições do corpo dos formulários
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({extended: true}));

//Para visualização dos arquivos .ejs
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));

// app.engine('html', renderFile);

//Definindo rotas
import profileRoute from './routes/profilePageRoute.js';
import homepageRoute from './routes/homepageRoute.js';
import loginRoute from './routes/loginRoute.js';
import signinRoute from './routes/signInRoute.js';
import signupRoute from './routes/signUpRoute.js';

//Configurando Rotas
app.use('/', homepageRoute)
app.use('/profile', profileRoute)
app.use('/login', loginRoute)
app.use('/login/signin', signinRoute);  
app.use('/login/signup', signupRoute); 

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});