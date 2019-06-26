const express = require('express');
const taskcontroller = require ('../controllers/tasks.controller');

const routes = express.Router();

routes.get('/', taskcontroller.get);
routes.post('/', taskcontroller.create);
routes.put('/', taskcontroller.update);
routes.delete('/', taskcontroller.remove);


module.exports = routes;