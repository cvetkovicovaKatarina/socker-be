import * as Koa from 'koa'

function cors(ctx: Koa.Context, next: () => void) {
  ctx.set('Access-Control-Allow-Origin', '*')

  if (ctx.request.method === 'OPTIONS') {
    ctx.set('Access-Control-Allow-Headers', ['Content-Type', 'Authorization'])
    ctx.set('Access-Control-Allow-Methods', ['OPTIONS', 'GET', 'POST', 'PATCH'])
    ctx.status = 200
    return
  }

  return next()
}

export default cors
