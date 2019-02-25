const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect');
    }
    console.log('Connected to mongodb server');
    
    //   db.collection('Todos').insertOne({
    //       text: 'Something to do ',
    //       completed : false
    //   }, (err, result) => {
    //    if(err) {
    //        return console.log('Unable to insert todo' , err);
    //    }
    //       console.log(JSON.stringify(result.ops))
    //   });

// /      db.collection('Users').insertOne({
//      name: 'Soumik',
//      age : 25,
//      location: 'Bangalore'
//     }, (err, result) => {
//      if(err) {
//          return conole.log('Unable to insert todo' , err);
//      }
//         console.log(JSON.stringify(result.ops))
//     });
      db.collection('Users').find({name :'Soumik'}).toArray().then ((docs) => {
  console.log(JSON.stringify(docs , undefined ,2));
      })
          
      db.close
      });

