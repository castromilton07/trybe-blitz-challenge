const getTasksByTitleAsc = async () => api.get('/tasks/title/asc')
  .then((response) => response.data)
  .catch((error) => console.log(error.response.status));

const getTasksByTitleDesc = async () => api.get('/tasks/title/desc')
  .then((response) => response.data)
  .catch((error) => console.log(error.response.status));

const getTasksByStatusAsc = async () => api.get('/tasks/status/asc')
  .then((response) => response.data)
  .catch((error) => console.log(error.response.status));

const getTasksByStatusDesc = async () => api.get('/tasks/status/desc')
  .then((response) => response.data)
  .catch((error) => console.log(error.response.status));

const getTasksByUpdatedAsc = async () => api.get('/tasks/updated/asc')
  .then((response) => response.data)
  .catch((error) => console.log(error.response.status));

const getTasksByUpdatedDesc = async () => api.get('/tasks/updated/desc')
  .then((response) => response.data)
  .catch((error) => console.log(error.response.status));

module.exports = {
  getTasksByTitleAsc,
  getTasksByTitleDesc,
  getTasksByStatusAsc,
  getTasksByStatusDesc,
  getTasksByUpdatedAsc,
  getTasksByUpdatedDesc,
};
