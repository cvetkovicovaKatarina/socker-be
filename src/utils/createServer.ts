import * as Koa from 'koa'
import * as http from 'http'
import * as bodyParser from 'koa-bodyparser'
import cors from '../middlewares/cors'
import words from '../routes/words'
import { Context } from 'koa'

const createServer = () => {
  const app = new Koa()

  app.use(bodyParser())
  app.use(cors)
  app.use(words())
  app.use((ctx: Context) => {
    if (ctx.request.path === '/status') {
      ctx.status = 200
    }
  })

  return http.createServer(app.callback())
}

export default createServer
