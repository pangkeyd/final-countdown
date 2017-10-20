'use strict'

const mongo = require('./../models/subscriber');
const LifeExpectancy = require('./../models/lifeExpectancy');
const Facebook = require('./../models/facebook');
const sendMessage = require('./../helpers/sendmessage')
const cron = require('./../helpers/cron');

class Tfc {
	static register(req, res) {
		Facebook.getSubscriberData(req.body.token)
		.then(user => {
			const subscriber = { fbId: user.id, birthdate: user.birthday, name: user.name, gender: user.gender };
			return new Promise((resolve, reject) => {
				mongo(db => {
					db.collection('subscriber').findOne({fbId: subscriber.fbId}, (err, result) => {
						if (result) resolve(LifeExpectancy.getRemaining(subscriber));
						else db.collection('subscriber').insert(subscriber, (err, result) => {
							if (err) reject(err);
							else resolve(LifeExpectancy.getRemaining(subscriber));
						});
					});
				});
			});
		})
		.then(result => {
			res.status(200).send({ daysRemaining: result});
			sendMessage(result);
			cron(result);
		})
		.catch(err => {
			res.status(200).send(err);
		});
	}
}

module.exports = Tfc;
