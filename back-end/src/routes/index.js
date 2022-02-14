const express = require('express');
const { TaskController } = require('../controllers');

const router = express.Router();

router.get('/tasks', TaskController);

module.exports = router;
