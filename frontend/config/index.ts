interface Config {
  [key: string]: string | undefined
}

export const NODE_ENV = process.env.NODE_ENV as string
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL as string
export const PORT = process.env.PORT as string

const config: Config = {
  NODE_ENV,
  BACKEND_URL,
  PORT
}

Object.keys(config).forEach((key: string) => {
  if (!config[key]) {
    console.warn(`[WARNING] There is no REACT_APP_${key} environment variable set!`)
  }
})

export default config
