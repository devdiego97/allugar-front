import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContextUIProvider } from './context/contextUI.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
<ContextUIProvider>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BrowserRouter>
</ContextUIProvider>
)
