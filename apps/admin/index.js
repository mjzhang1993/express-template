
/*
    每个服务子程序的入口文件
*/ 

const express = require('express');
const router = require('./route');

const admin = express();

// 装载子程序的路由
admin.use(router);

module.exports = admin;