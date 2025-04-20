import { Application } from 'express'
import { Server } from 'http'
import notFoundRoute from './notFound'

export default function addRoutes(app: Application, server: Server) {
  server.on('connection', () => console.info('Someone connected!'))

  app.get('/', (_, res) => {
    res.send('Sports TBD: Backend')
  })

  // Has to be last
  notFoundRoute(app)
}
