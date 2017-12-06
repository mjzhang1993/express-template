/*
    将当前子程序的路由处理函数都集中到这个目录
*/ 

exports.index = (req, res) => {
    res.send('get admin service path / ');
}

exports.user = (req, res) => {
    const user = req.params && req.params.user || 'null';
    
    res.send('get admin service path /' + user);
}