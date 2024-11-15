interface Config {
  [key: string]: string | undefined
}

export const NODE_ENV = process.env.NODE_ENV!
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL!

const config: Config = {
  NODE_ENV,
  BACKEND_URL
}

Object.keys(config).forEach((key: string) => {
  if (!config[key]) {
    console.warn(`[WARNING] There is no REACT_APP_${key} environment variable set!`)
  }
})

export default config
