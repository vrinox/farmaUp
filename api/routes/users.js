var models = require('../models/index');
module.exports = function(app){
  app.post('/users', function(req, res) {
    models.User.create({
      email: req.body.email
    }).then(function(user) {
      res.json(user);
    });
  });
};
