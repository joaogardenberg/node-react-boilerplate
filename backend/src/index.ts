import express from 'express'
import { PORT } from 'config'

const app = express()

app.listen(PORT, () => console.info(`[Express] Listening on port ${PORT}`))
