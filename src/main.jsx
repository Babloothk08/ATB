import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WhatsAppSticky from './components/WhatsappSticky.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <WhatsAppSticky/>
  </StrictMode>,
)
