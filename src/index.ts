import createServer from './utils/createServer'

const PORT = 8000
const server = createServer()

server.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`)
})