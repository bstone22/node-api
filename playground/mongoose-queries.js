const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5b48d9a7c789ad16393f63ae';
var id = '5b48d9a7c789ad16393f63ae';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
//
// //find one other than ID
// Todo.findOne({
//   _id: id
// // }).then((todo) => {
// //   console.log('todos', todo);
// // });
//
// //fine one using the ID
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found!');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

User.findById('5b4840541f9cca1202db300d').then((user) => {
  if(!user){
    return console.log("unable to find user");
  }

  console.log(JSON.stringify(user, undefined, 2));a

}, (e) => {
  console.log(e);
});
