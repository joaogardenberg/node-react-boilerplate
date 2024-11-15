import { isNil } from 'lodash'

interface Config {
  [key: string]: unknown
}

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string
export const BASE_URL = import.meta.env.BASE_URL
export const DEV = import.meta.env.DEV
export const MODE = import.meta.env.MODE
export const PROD = import.meta.env.PROD
export const SSR = import.meta.env.SSR

const config: Config = {
  BACKEND_URL,
  BASE_URL,
  DEV,
  MODE,
  PROD,
  SSR
}

Object.keys(config).forEach((key: string) => {
  if (isNil(config[key])) {
    console.warn(`[WARNING] There is no VITE_${key} environment variable set!`)
  }
})

export default config
