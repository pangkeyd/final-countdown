const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const URI = 'mongodb://localhost:27017/final_countdown'

function connect(cb){

  mongoClient.connect(URI, (err, db) => {
    if(!err){
      cb(db)
    }else{
      throw err
    }
  })

}

module.exports = connect;
