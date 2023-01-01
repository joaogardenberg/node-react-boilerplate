import { Application } from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

export default function addMiddlewares(app: Application) {
  app.use(helmet())
  app.use(cors())
  app.use(bodyParser.json())
  app.use(morgan('combined'))
}
