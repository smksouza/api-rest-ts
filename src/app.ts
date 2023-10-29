import fastify from 'fastify'
import Cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const server = fastify()

server.register(Cookie)

server.register(transactionsRoutes, {
  prefix: 'transactions',
})
