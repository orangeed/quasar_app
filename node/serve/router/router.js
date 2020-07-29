const router = require('koa-router')()
//添加路由
router.get('/', async (ctx, next) => {
        ctx.body = "我是一个get请求主路由"
    })
    .get('/login', async (ctx, next) => {
        ctx.body = "我是get登录请求"
    })

module.exports = router;