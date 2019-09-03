/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1567150583565_2769';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
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

  return {
    ...config,
    ...userConfig,

  };
};
