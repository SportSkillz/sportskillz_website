//Importando módulo dotenv
import  dotenv from "dotenv";
dotenv.config();

//Definindo constantes
import express from 'express';
const app = express();
const port = 3000;

//Conexão com o banco de dados
import mongoose from "mongoose";
const uri = process.env.CONNECTIONSTRING;
mongoose.connect(uri) 
  .then(() => {
    app.emit('pronto')
    console.log('Conectado com sucesso');
  })
  .catch(err => console.log('Erro: ' + err));

//Configuração e utilização de sessões
import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "connect-flash";

function generateSessionSecrect(length){ //Gera o segredo de sessão de acordo com a quantidade de caracteres escolhida
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let secrect = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    secrect += charset[randomIndex];
  }
  return secrect;
}
const sessionSecret = generateSessionSecrect(21); //Indica a quantidade de caracteres o segredo de sessão terá

let store = new MongoStore({
  mongoUrl: uri,
  collectionName: "sessions"
}) //Indica o banco de dados que será conectado, assim como a coleção em que as sessões serão salvas

const sessionOpt = session({ //Firma as configurações das sessões que serão criadas
  secret: sessionSecret,
  store: store,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 dia 
    httpOnly: true
  }
});
app.use(sessionOpt);
app.use(flash());

import passport from "./controllers/passportLocal.js";
app.use(passport.initialize());
app.use(passport.session());

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

//o servidor começa a 'rodar' na porta, apenas após a conexão com o banco de dados
app.on('pronto', () => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
})