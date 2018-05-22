var Message = require('../models/message');
var User = require('../models/user');

module.exports = function(app, passport) {
	// Authentication logic
	var loggedIn = function(req, res, next) {
		if (req.isAuthenticated()) {
			next();
		} else {
			res.redirect('/');
		}
	}

	// Rendering index.ejs
	app.get('/', (req, res) => res.render('index'));
	
	// Rendering dashboard.ejs (user auth)
	app.get('/dashboard', loggedIn, function(req, res) {
		Message.find({}, function(err, messages) {
			res.render('dashboard', {messages: messages});
		});
	});

	// Rendering user login/register
	app.get('/user/login', (req, res) => res.render('login'));
	app.get('/user/register', (req, res) => res.render('register'));

	// POST request /register
	app.post('/register', (req, res) => {
		// Gets req.body from /register form
		let {username, password} = req.body;
		
		// Find if user exists in the database
		User.findOne({username}, (err, doc) => {
			if (err) {
				res.status(500).send(err);
			} else {
				// If there is user send 500 error.
				if (doc) {
					res.status(500).send('User exists!');
				// Save user to collection
				} else {
					let newUser = new User();
					newUser.username = username;
					newUser.password = newUser.hashPassword(password);
					newUser.save((err, user) => {
						if (err) {
							res.status(500).send(err);
						} else {
							res.send(user);
						}
					});
				}
			}
		});
	});

	// POST request /login
	app.post('/login', passport.authenticate('local', {
		failureRedirect: '/',
		successRedirect: '/dashboard'
	}), function(req, res) {
		res.send('Login success');
	});
	
	// POST request on contact_me form
	app.post('/', (req, res, next) => {
		let {name, subject, message } = req.body;
		new Message({name, subject, message}).save((err, doc) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.redirect('/');
			}
		});
	});

	// GET request passport to destroy all session.
	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
}
