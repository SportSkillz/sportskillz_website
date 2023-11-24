// const { MongoClient, ServerApiVersion } = require("mongodb");

// async function main() {
  
//     const uri =
//     "mongodb+srv://proberto:sportskillzapp@sportskillzcluster.zpv29li.mongodb.net/?retryWrites=true&w=majority";

//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });

//   const dbName = "sportskillz";

//   try {
//     await client.connect();

//     await client.db("admin").command({ ping: 1 });
//     console.log("Você se conectou com sucesso ao MongoDB!");

//     const db = client.db(dbName);
//     const collection = db.collection("sport");

//   } catch (err) {
//     console.error("Aconteceu um erro " + err.message);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

const mongoose = require('mongoose');

const uri = 'mongodb+srv://proberto:sportskillzapp@sportskillzcluster.zpv29li.mongodb.net/?retryWrites=true&w=majority';

var appEmit;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => appEmit.emit('pronto'));

module.exports = {appEmit}
