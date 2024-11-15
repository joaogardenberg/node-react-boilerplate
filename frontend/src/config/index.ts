interface Config {
  [key: string]: string | undefined
}

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string

const config: Config = {
  BACKEND_URL
}

Object.keys(config).forEach((key: string) => {
  if (!config[key]) {
    console.warn(`[WARNING] There is no VITE_${key} environment variable set!`)
  }
})

export default config
