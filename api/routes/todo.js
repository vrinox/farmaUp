var models = require('../models/index');
module.exports = function(app){
  //obtener todos
  app.get('/todos', function(req, res) {
    models.Todo.findAll({}).then(function(todos) {
      res.json(todos);
    });
  });
  //guardar registro
  app.post('/todos', function(req, res) {
    models.Todo.create({
      title: req.body.title,
      UserId: req.body.user_id
    }).then(function(todo) {
      res.json(todo);
    });
  });
  //buscar uno solo
  app.get('/todo/:id', function(req, res) {
    models.Todo.find({
      where: {
        id: req.params.id
      }
    }).then(function(todo) {
      res.json(todo);
    });
  });
  //modificar
  app.put('/todo/:id', function(req, res) {
    models.Todo.find({
      where: {
        id: req.params.id
      }
    }).then(function(todo) {
      if(todo){
        todo.updateAttributes({
          title: req.body.title,
          complete: req.body.complete
        }).then(function(todo) {
          res.send(todo);
        });
      }
    });
  });
  // delete a single todo
  app.delete('/todo/:id', function(req, res) {
    models.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(todo) {
      res.json(todo);
    });
  });
};
