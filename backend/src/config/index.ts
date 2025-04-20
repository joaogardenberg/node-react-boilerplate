import { isNil } from 'lodash'

interface Config {
  [key: string]: string | boolean | undefined
}

export const FRONTEND_URL = process.env.FRONTEND_URL
export const NODE_ENV = process.env.NODE_ENV
export const PORT = process.env.PORT || '3001'

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
