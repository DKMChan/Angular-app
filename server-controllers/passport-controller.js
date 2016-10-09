var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app){
        passport.serializeUser(function(user, done) {
        done(null, user.id);
        });

    passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
            done(err, user);
            });
        });

    passport.use(new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
            if (err) return done(err);
            if (!user) return done(null, false);
            user.comparePassword(password, function(err, isMatch) {
            if (err) return done(err);
            if (isMatch) return done(null, user);
            return done(null, false);
            });
        });
        }));

    app.use(session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) next();
        else res.send(401);
        }


    app.post('/api/login', passport.authenticate('local'), function(req, res) {
      res.cookie('user', JSON.stringify(req.user));
      res.send(req.user);
     });
    
    app.post('/api/signup', function(req, res, next) {
      var user = new User({
        email: req.body.email,
        password: req.body.password
      });
      user.save(function(err) {
        if (err) return next(err);
        res.send(200);
      });
    });
    
    app.get('/api/logout', function(req, res, next) {
      req.logout();
      res.send(200);
    });

    app.use(function(req, res, next) {
      if (req.user) {
        res.cookie('user', JSON.stringify(req.user));
      }
      next();
    });

}