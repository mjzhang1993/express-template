/*
    每个子程序的路由配置
*/ 
const router = require('express').Router();
const controllers = require('./controllers/index');

router.get('/', controllers.index);
router.get('/:user', controllers.user);

module.exports = router;