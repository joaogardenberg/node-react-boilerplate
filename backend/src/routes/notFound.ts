import { Application } from 'express'
import { FRONTEND_URL } from 'config'

export default function notFoundRoutes(app: Application) {
  app.get('*all', ({ originalUrl }, res) => res.redirect(`${FRONTEND_URL}${originalUrl}`))
}
