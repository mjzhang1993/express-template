/*
    抽取出 express 服务需要配置的部分，如 port
*/

const isProduction = process.env.NODE_ENV === "production"; // 生产
const isStage = process.env.NODE_ENV === "stage"; // 灰度
const isTest = process.env.NODE_ENV === "test"; // 测试

const config = {
  port: normalizePort(process.env.PORT || '3322')
};

if (isProduction) {
  Object.assign(config, {});
} else if (isStage) {
  Object.assign(config, {});
} else if (isTest) {
  Object.assign(config, {});
}

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = config;
