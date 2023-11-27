//Definindo constantes
import express from 'express';
const app = express();
const port = 3000;

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