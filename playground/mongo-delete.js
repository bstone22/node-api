//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//object destructing


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Server');

  var db = client.db('Todos');

  //delete many, remove many documents
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result => {
  //   console.log(results);
  // }));

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  //find one and delete, searches and returns
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5b3f0749060fd65b27f5547a") }).then((result)=>{
    console.log(result);
  });

  db.collection('Users').deleteMany({name: 'Brent Stone'}).then((results) => {
    console.log(result);
  });

  db.collection('Users').find({name: 'Brent Stone'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  })
  //client.close();
});
