import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home          from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                      element={<Home />} />
        <Route path="/projects/:projectId"   element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
