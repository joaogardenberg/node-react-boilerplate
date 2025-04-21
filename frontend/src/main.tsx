import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import GlobalStyles from './main.styled'

createRoot(document.getElementById('sporthood')!).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>
)
