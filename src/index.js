const createServer = require('./server');
const createDatabaseConnection = require('./database');
const createRoutes = require('./routes');

const core = async () => {
  const server = createServer();
  const database = createDatabaseConnection();

  try {
    const connection = await database.start();
    const routes = createRoutes(connection);

    await server.start(routes);
  } catch (error) {
    console.log(error)
  }
}


core();