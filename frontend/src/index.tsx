import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import GlobalStyles from './index.styled'

ReactDOM.createRoot(
  document.getElementById('boilerplate') as HTMLElement
).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>
)
