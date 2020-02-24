//import { Db } from "mongodb";

const { MongoClient, ObjectID } = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);
    //      db.collection('users').findOne({ _id: new ObjectID("5e4fce1ec7831f1d35daa3e8") },
    //          (error, user) => {
    //              if (error) {
    //                  return console.log("Unable to fetch user");
    //              }
    //              console.log(user);
    //          });
    //      //  db.collection('users').One({
    //      //      name: 'Cat',
    //      //      city: 'Seattle',
    //      //      age: 22,
    //      //      gender: 'female'
    //      //  });
    //  });
    db.collection('tasks').insertMany([{
            description: 'Exercise',
            completed: true
        },
        {
            description: 'Watch pro sports',
            completed: false
        }
    ], (error, results) => {
        if (error) {
            return console.log('unable to insert tasks');
        }
        console.log(results);
    })

});