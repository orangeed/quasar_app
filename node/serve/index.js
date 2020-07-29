const Koa = require('koa');
const router = require('./router/router.js')
const cors = require("koa2-cors");

const app = new Koa();

const serve = {
    start() {
        // 解决跨域
        app.use(cors());
        app.use(async (ctx, next) => {
            ctx.set("Access-Control-Allow-Origin", "*");
            await next();
        });
        // 挂载路由
        app.use(router.routes()).use(router.allowedMethods());
        // 监听端口、启动程序
        app.listen(3000, err => {
            if (err) throw err;
            console.log('runing...');
        })
    }
}
module.exports = serve