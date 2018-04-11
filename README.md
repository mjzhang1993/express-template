# express 基础项目模板

### 目录结构

- /app.js 主程序入口文件
- /mount.js 用于挂载子程序
- /views 模板文件夹
- /public 前端静态资源文件夹
- /config 开发配置
- /models 数据库文件
- /core 核心、基础 模块或者中间件
- /apps 子程序集合
- /apps/admin 子程序文件夹
- /apps/admin/index.js 子程序入口
- /apps/admin/route.js 子程序的路由配置
- /apps/admin/controllers 子程序路由处理函数，http 请求等
- /apps/admin/models 子程序处理关于数据库部分的代码
- /apps/admin/services 子程序业务代码部分

### 命令

```shell
    npm start 
```