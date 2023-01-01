import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import GlobalStyles from './index.styled'
import reportWebVitals from './reportWebVitals'

ReactDOM.createRoot(document.getElementById('boilerplate') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
)

reportWebVitals()
