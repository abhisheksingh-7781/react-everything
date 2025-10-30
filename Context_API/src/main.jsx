import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemContext from './context/ThemContext.jsx'

createRoot(document.getElementById('root')).render(

    <ThemContext>
      <App />
    </ThemContext>

)
