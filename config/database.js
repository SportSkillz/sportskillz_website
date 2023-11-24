const mongoose = require('mongoose');

const uri = 'mongodb+srv://proberto:sportskillzapp@sportskillzcluster.zpv29li.mongodb.net/?retryWrites=true&w=majority';

async function main(){
  await mongoose.connect(uri)
}

main().catch(err => console.log(err))
