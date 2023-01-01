import { Application } from 'express'
import notFoundRoute from './notFound'

export default function addRoutes(app: Application) {
  app.get('/', (_, res) => res.send('Boilerplate: Backend'))

  // Has to be last
  notFoundRoute(app)
}
