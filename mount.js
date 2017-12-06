/*
    用于将 'app 主程序' 与 '业务子程序' 连接起来，将子程序挂载到指定路径
*/ 

module.exports = (app) => {
    app.use('/admin', require('./apps/admin'));
}