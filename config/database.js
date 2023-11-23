const { MongoClient, ServerApiVersion } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://proberto:sportskillzapp@sportskillzcluster.zpv29li.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    
    await client.db("admin").command({ ping: 1 });
    console.log("Você se conectou com sucesso ao MongoDB!");

   // await listDatabases(client);
  } catch (err) {
    console.error("Aconteceu um erro " + err.message);
  } finally {
    await client.close();
  }
}

// async function listDatabases(client){
//     databaseList = await client.db().admin().listDatabases();

//     console.log("Databases: ");
//     databaseList.array.forEach(db => console.log(` - ${db.name}`));
// };

main().catch(console.error);
