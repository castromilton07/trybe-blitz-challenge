const connection = require('./connection');

const DB_COLLECTION = 'tasks';

const getAll = async () => {
  const db = await connection();
  const results = await db.collection(DB_COLLECTION).find().toArray();
  return results;
};

module.exports = { getAll };
