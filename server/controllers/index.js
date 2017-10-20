const mongo = require('../models/subscriber')

class Final {

  static getData(req, res){
    mongo(db => {
      db.collection('subscriber').find().toArray((err, result) => {
        res.send(result)
      })
    })
  }

  static saveData(req, res){
    mongo(db => {
      db.collection('subscriber').insert({
        fbId: req.body.fbId,
        birthdate: req.body.birthdate,
        name: req.body.name,
        gender: req.body.gender
      }, (err, result) => {
        if(!err){
          res.send('SAVED!')
        }
      })
    })
  }

  static updateData(req, res){
    mongo(db => {
      db.collection('subscriber').update({
        fbId: req.params.fbId
      },
      {
        fbId: req.body.fbId,
        birthdate: req.body.birthdate,
        name: req.body.name,
        gender: req.body.gender
      }, (err, result) => {
        if(!err){
          res.send('UPDATED!')
        }
      })
    })
  }

  static deleteData(req, res){
    mongo(db => {
      db.collection('subscriber').remove({
        fbId: req.params.fbId
      }, (err, result) => {
        res.send('DELETED!')
      })
    })
  }

}

module.exports = Final
