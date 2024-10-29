import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginPage from './Components/loginpage/loginpage.jsx'
import Dashboard from './Components/dashboard/dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Dashboard role='Designer'/>
  </StrictMode>,
)
