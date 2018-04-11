/*
    服务器 500 错误
*/

module.exports = function (err, req, res, next) {
    if (req.xhr) {
        return res.status(500).json({
            code: 500,
            message: 'server error'
        });
    }

    res.render('500.pug');

    next(err);
};