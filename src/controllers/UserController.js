const createUserController = (connection) => {

  const select = async (request, response) => {
    try {
      const users = await connection.query('SELECT * FROM TBL_USER');

      return response.status(200).json(users);
    } catch (error) {
      console.error(error);
    }
  };

  return { select };
};

module.exports = createUserController;