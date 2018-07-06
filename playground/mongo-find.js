//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//object destructing


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Server');

  var db = client.db('Todos');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b3f06149d3d745af54380e8')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch todos');
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch todos');
  // });

  db.collection('Users').find({name: 'Brent Stone'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  })
  //client.close();
});
