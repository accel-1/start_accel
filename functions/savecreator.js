const querystring = require("qs");
const { MongoClient, ServerApiVersion }=require('mongodb');

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {  statusCode: 405, body: "Method Not Allowed" };
  }

  
  const params = querystring.parse(event.body);
  const owner = params.owner;
  const collectionname=params.collectionName
  const collectionaddress=params.collectionAddress
  const collectiontype=params.collectionType
  const uri="mongodb+srv://rootuser:rootuser@cluster0.f4qxsu0.mongodb.net/?retryWrites=true&w=majority"
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const db=await client.connect();
  const collection=db.db('nft').collection("creator")
  collection.insertOne({
   owner:owner,
   collectionName:collectionname,
   collectionAddress:collectionaddress,
   collectionType:collectiontype
  
  })

  return {
    statusCode: 200,
    body:"done",
  };
};