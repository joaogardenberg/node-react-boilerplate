import { isNil } from 'lodash'

interface Config {
  [key: string]: string | boolean
}

export const FRONTEND_URL = process.env.FRONTEND_URL as string
export const NODE_ENV = process.env.NODE_ENV as string
export const PORT = process.env.PORT as string

const config: Config = {
  FRONTEND_URL,
  NODE_ENV,
  PORT
}

Object.keys(config).forEach((key: string) => {
  if (isNil(config[key])) {
    console.warn(`[WARNING] There is no ${key} environment variable set!`)
  }
})

export default config
