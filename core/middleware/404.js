/*
    客户端 404 错误页面
*/ 
module.exports = function (req, res, next) {
    if (req.xhr) {
        return res.status(404).json({
            code: 404,
            message: 'page notfound'
        });
    }

    res.render('404.jade');
}