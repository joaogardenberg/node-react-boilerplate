import { Application } from 'express'
import { Server } from 'http'
import notFoundRoute from './notFound'
import config from 'config'

export default function addRoutes(app: Application, server: Server) {
  server.on('connection', () => console.info('Someone connected!'))

  app.get('/', (_, res) => {
    res.send(config)
  })

  // Has to be last
  notFoundRoute(app)
}
