'use strict'
const request = require('request');

class LifeExpectancy {
	static getRemaining(subscriber) {
		return new Promise((resolve, reject) => {
			
			const endpoint = 'http://api.population.io:80/1.0/life-expectancy/remaining';
			const gender = subscriber.gender.toLowerCase() === 'male' ? 'male' : 'female';
			const country = 'Indonesia';
			// MM/DD/YYYY -> YYYY-MM-DD
			let now = new Date();
			let day = now.getDate();
			let month = now.getMonth();
			let year = now.getFullYear();
			// let date = [year, month, date].join('-'); // entah kenapa ini bikin error, jadi dibawah ya
			let birthdate = subscriber.birthdate.split('/');
			birthdate = [birthdate[2], birthdate[0], birthdate[1]]; //YYYY-MM-DD

			let age = birthdate.map(d => Number(d));
			age = new Date(...age).getFullYear();
			age = Math.abs(year - age);
			age = age + 'y0m';
			
			const requestURL = `${endpoint}/${gender}/${country}/${[year, month, day].join('-')}/${age}/`;

			request({url: requestURL}, function (error, response, body) {
				if (error) reject(error);
				body = JSON.parse(body);
				let result = Math.round(body.remaining_life_expectancy * 365);
				resolve(result);
			});
		});
	}
}

module.exports = LifeExpectancy;