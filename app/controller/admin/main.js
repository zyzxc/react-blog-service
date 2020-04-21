'use strict';

const Controller = require('egg').Controller;
class MainController extends Controller {
  async index() {
    this.ctx.body = 'hi,api';
  }

  async checkLogin() {
    console.log(this.ctx.request.body);
    const username = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const sql = `SELECT userName FROM admin_user WHERE userName = '${username}' AND password = '${password}'`;
    const result = await this.app.mysql.query(sql);
    if (result.length > 0) {
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = {
        success: true,
        message: '登录成功！',
        data: openId,
      };
    } else {
      this.ctx.body = {
        success: false,
        message: '登录失败！',
        data: null,
      };
    }
  }
}
module.exports = MainController;
