import { Application } from 'express'
import { Server } from 'http'
import notFoundRoute from './notFound'

export default function addRoutes(app: Application, server: Server) {
  typeof server
  app.get('/', (_, res) => res.send('Boilerplate'))

  // Has to be last
  notFoundRoute(app)
}
