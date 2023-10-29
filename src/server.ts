import { env } from './env'
import { server } from './app'

server
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
