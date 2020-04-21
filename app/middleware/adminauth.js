'use strict';
module.exports = options => {
  return async function adminauth(ctx, next) {
    console.log(ctx.session.openId);
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = {
        success: false,
        message: '请先登录！',
        data: null,
      };
    }
  };
};
