'use strict';

const path = require('path');
const ADODB = require('node-adodb');

const createDatabaseConnection = () => {
  const connectionString = path.resolve(__dirname, '../repository/ace-old.mdb');

  const start = async () => {
    const connection = ADODB.open(`Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${connectionString};`);

    return connection;
  };
  
  return { start };
};


module.exports = createDatabaseConnection;