const express = require('express');
const cors = require('cors');

const createServer = () => {
  const app = express();

  const start = (routes) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(routes.start());

    app.listen(3333, () => {
      console.log(`Server running in port: ${3333}`);
    });

    return app;
  };

  return { start };
};

module.exports = createServer;