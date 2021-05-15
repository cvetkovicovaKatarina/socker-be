import * as Router from 'koa-router'

const words = () => {
  const router = new Router()

  router.post('/words', async (ctx) => {
    const body = ctx.request.body

    console.log(body)

    ctx.status = 200
  })

  return router.routes()
}

export default words
