const Nexmo = require('nexmo');

let nexmo = new Nexmo({
  apiKey: 'b43455ab',
  apiSecret: 'afc4681c27022e6f'
});

module.exports = function (result){
  return new Promise((resolve,reject)=>{
    nexmo.message.sendSms('Nexmo','6282112831235',`your have ${result} days left to live a good life`, function (err,data){
      if(!err){
        resolve({
          result: result,
          data: data
        });
      }else {
        reject(err)
      }
    })
  })
}