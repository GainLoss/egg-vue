'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async test(){
    const ctx = this.ctx;
    const results = await this.app.mysql.query('SELECT * FROM iptest');
    ctx.body={
      results:results
    }
  }
}

module.exports = HomeController;
