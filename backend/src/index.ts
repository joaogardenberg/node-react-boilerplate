import express from 'express'
import http from 'http'
import { PORT } from 'config'
import addMiddlewares from 'middlewares'
import addRoutes from 'routes'

const app = express()
const server = new http.Server(app)

addMiddlewares(app)
addRoutes(app, server)

server.listen(PORT, () => console.info(`[Express] Listening on port ${PORT}`))
