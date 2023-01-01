import { Application } from 'express'
import { Server } from 'http'
import notFoundRoute from './notFound'

export default function addRoutes(app: Application, server: Server) {
  server.on('connection', () => console.info('Someone connected!'))
  app.get('/', (_, res) => res.send('Boilerplate: Backend'))

  // Has to be last
  notFoundRoute(app)
}
