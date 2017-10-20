'use strict'
const FB = require('fb');
const fb = new FB.Facebook({
	appId: '1985113405111396',
	appSecret: '738400c6568ad6df958743cae85c76e0',
	version: 'v2.10'
});

class Facebook {
	static getSubscriberData(fbToken) {
		return new Promise((resolve, reject) => {
			FB.api('me', {fields: ['id', 'name', 'gender', 'birthday'], access_token: fbToken }, function (me) {
				if (me) resolve(me);
				else reject({error: 'error'});
			});
		});
	}
}

module.exports = Facebook;