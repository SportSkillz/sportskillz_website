const mongoose = require('mongoose');
const app = require('../src/app.js')

const uri = 'mongodb+srv://proberto:sportskillzapp@sportskillzcluster.zpv29li.mongodb.net/?retryWrites=true&w=majority';

async function main(){
  await mongoose.connect(uri)
}

main()
.then(() => {
  console.log('Conectado com sucesso');
  app.emit('pronto');
})
.catch(err => console.log('Erro: ' + err))