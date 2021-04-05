const express = require('express');

const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/profile', ProfileController.index);

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.create);
routes.put('/tasks/edit/:id', TaskController.show);
routes.delete('/tasks/:id', TaskController.delete);

module.exports = routes;