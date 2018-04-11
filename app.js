/*
    入口文件，初始化应用
*/ 
const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./config/common');
const router = require('./router');

// 创建主应用程序
const app = express();

// 设置模板为 pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', config.port);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 挂载业务子程序到主程序
router(app);

// 设定 404 500 错误页面
const pageNotFound = require('./core/middleware/404');
const serverError = require('./core/middleware/500');
app.all('*', pageNotFound);
app.use(serverError);

const server = http.createServer(app);

server.listen(app.get('port'), function () {
    console.log('\nexpress server start at http://localhost:' + app.get('port'));
});
