// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) {
// 	if (req.headers.hasOwnProperty('jwtoken')) {
// 		jwt.verify(req.headers.jwtoken, process.env.SECRET_KEY, (err, decoded) => {
// 			if (err) {
// 				if (err.name === 'TokenExpiredError') res.status(401).send(err);
// 				else if (err.name === 'JsonWebTokenError') res.status(403).send(err);
// 				else res.status(500).send(err);
// 			} else if (decoded.hasOwnProperty('fbId') && decoded.hasOwnProperty('name')) {
// 				req.subscriber = {
// 					fbId: decoded.fbId,
// 					name: decoded.name
// 				}
// 				next();
// 			} else {
// 				res.redirect('/register');
// 			}
// 		});
// 	} else {
// 		res.redirect('/register');
// 	}
// }