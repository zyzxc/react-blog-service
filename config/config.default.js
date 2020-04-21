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
  const config = exports = {
    mysql: {
      client: {
        host: '120.27.224.108',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'blog',
      },
      app: true,
      agent: false,
    },
    security: {
      csrf: {
        enable: false,
        // ignoreJSON: false,
        // useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
        // cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
        // sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
        // queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
        // bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
        // headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      },
      domainWhiteList: [ '*' ],
    },
    cors: {
      origin: 'http://localhost:3000',
      credentials: true, // 允许Cook可以跨域
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585711135359_8836';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
