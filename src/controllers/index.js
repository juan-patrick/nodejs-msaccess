const createUserController = require("./UserController");

const createControllers = (connection) => {

  const initialize = () => {
    const UserController = createUserController(connection);

    return { UserController };
  };

  return { initialize };
};

module.exports = createControllers;