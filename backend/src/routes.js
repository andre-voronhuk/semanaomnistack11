
const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);
routes.get('/profile', ProfileController.index);

routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes; 