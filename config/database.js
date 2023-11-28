import mongoose from "mongoose";

import  dotenv from "dotenv";
dotenv.config();


async function main(){
  await mongoose.connect(process.env.CONNECTIONSTRING) 
}

main()
.then(() => {
  console.log('Conectado com sucesso');
})
.catch(err => console.log('Erro: ' + err))

export default mongoose;