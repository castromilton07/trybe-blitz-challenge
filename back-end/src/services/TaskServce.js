const task = require('../models/Task');

const getAll = async () => {
  const tasks = await task.getAll();
  return tasks;
};

module.exports = { getAll };
