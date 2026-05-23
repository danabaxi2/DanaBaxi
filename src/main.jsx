import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home  from './pages/Home.jsx'
import Haven from './pages/Haven.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/haven" element={<Haven />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
