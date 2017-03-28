var models = require('../models/index');
module.exports = function(app){
  //ruta general
  app.get('/', function(req, res, next) {
    res.render('index', {});
  });

  //rutas todo
  require('./todo')(app);

  //rutas users
  require('./users')(app);
};
