//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//object destructing


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Server');

  var db = client.db('Todos');

  //FInd one and update, looked at documentation for arguments
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b462bd38ccfb785556dffed')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   reutrnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b3f080b9ac55a5b46bd804b')
  }, {
    $set: {
      name: 'Brent Stone'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  });

  db.collection('Users').find({name: 'Brent Stone'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  })
  //client.close();
});
