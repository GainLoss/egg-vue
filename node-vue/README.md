# node-vue

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

#总结

# 后台框架
1. 下载egg框架 
    地址：https://eggjs.org/zh-cn/index.html
    下载：
        $ mkdir egg-example && cd egg-example
        $ npm init egg --type=simple
        $ npm i
    执行：
        npm run dev
    打开：
        http://127.0.0.1:7001

    至此可以打开一个页面，显示hi egg

2. 下载mysql
    下载mysql-installer-community-8.0.17.0；
    添加环境变量 https://jingyan.baidu.com/article/e4d08ffdd5f6670fd2f60d2f.html；
    在cmd中输入mysql -u root -p；
    Server8之后设置密码有要求，解决https://blog.csdn.net/CheneyKKE/article/details/80272777；
    下载mysql可视化软件，推荐Navicat，将你之前设置的mysql的账号和密码进行连接；
    至此mysql工作完成

3. egg连接mysql
在config.default.js中配置
```js
//数据库配置
config.mysql={
    client:{
        host:'localhost',
        port:'3306',
        user:'root',
        password:'password',
        database:'mysql',
    },
    app:true,
    agent:false
}
//前端模板交互
config.static = {
    prefix:'/public/',
    dir:'./views/public',//path.join(appInfo.baseDir, 'app/public'),
    dynamic:true,
    preload:false,
    maxAge:31536000,
    buffer:false
};
//跨域配置
config.security = {
csrf: {
    enable: false,
    ignoreJSON: true
},
domainWhiteList: ['*'], //配置白名单
};
config.cors = {
// origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
}
```
在plugin.js配置
```js
cors: {
    enable: true,
    package: 'egg-cors'
},
mysql : {
    enable: true,
    package: 'egg-mysql',
}
```
至此前后端配置完成
router.js
```js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test',controller.home.test);
};
```
controller/home.js
```js
async test(){
    const ctx = this.ctx;
    const results = await this.app.mysql.query('SELECT * FROM iptest where id="'+1+'"');
    ctx.body={
        results:results
    }
}
```
至此后台连接数据库成功

组件axios调取接口
main.js
```js
import axios from 'axios';
Vue.prototype.$http = axios;
```
组件js文件
```js
mounted () {
    this.$http.get('http://127.0.0.1:7001/test').then(response => (this.info = response))
}
```



