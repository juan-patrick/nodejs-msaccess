const { Router } = require('express');

const createControllers = require('../controllers');

const createRoutes = (connection) => {
  const router = Router();

  const controllers = createControllers(connection);

  const start = () => {
    const { UserController } = controllers.initialize();

    router.get('/users', UserController.select);

    return router;
  };

  return { start };
}

module.exports = createRoutes;