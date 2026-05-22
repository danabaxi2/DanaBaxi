import { useNavigate } from 'react-router-dom'
import './App.css'
import sharkImg  from './assets/shark.png'
import dudeImg   from './assets/dude.png'
import havenImg  from './assets/haven.png'
import phophoImg from './assets/phopho.png'

export default function App() {
  const navigate = useNavigate()

  return (
    <div className="portfolio">
      <nav className="navbar">
        <span className="navbar__logo">Dana Baxi</span>
        <div className="navbar__links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main className="main-canvas">
        <img className="thumb thumb--shark"  src={sharkImg}  alt="Shark project" />
        <img className="thumb thumb--dude"   src={dudeImg}   alt="Dude project" />
        <img
          className="thumb thumb--haven"
          src={havenImg}
          alt="Haven project"
          onClick={() => navigate('/haven')}
        />
        <img className="thumb thumb--phopho" src={phophoImg} alt="Phopho project" />
      </main>
    </div>
  )
}
