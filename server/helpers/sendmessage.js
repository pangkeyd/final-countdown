var Nexmo = require('nexmo');
const cron = require('node-cron');

var nexmo = new Nexmo({
  apiKey: 'b43455ab',
  apiSecret: 'afc4681c27022e6f'
});

module.exports = function sendMessage(result){
  return new Promise((resolve,reject)=>{
    nexmo.message.sendSms('TFC','6282112831235',`your time left : ${result} days`, function (err,data){
      if(!err){
        resolve(data)
      }else {
        reject(err)
      }
    })
  })
}
//
// class EsEmEs {
//   //models
//   static sendMessage() {
//       return new Promise((resolve,reject)=>{
//         nexmo.message.sendSms('Nexmo', '6282112831235', 'Message', function(err, data) {
//           if (!err) {
//             resolve(data)
//           } else {
//             reject(err)
//           }
//         });
//       })
//   }
//
//   static postSMS(req,res){
//       SMS.sendMessage()
//       .then(result=>{
//         res.send(result)
//       })
//       .catch(err=>{
//         res.send(err)
//       })
//     }
//
// }

// module.exports = sendMessage
