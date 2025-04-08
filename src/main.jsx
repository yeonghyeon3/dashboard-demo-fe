import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/shared/styles/theme.css'
import './main.css'
import '@/app/config/chartjsConfig.js'
import App from './app/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
