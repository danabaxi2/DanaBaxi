import { useNavigate } from 'react-router-dom'
import '../App.css'
import bgVector      from '../assets/bg_vector.svg'
import weirdFishImg  from '../assets/weird_fishes_thumb.png'
import dudeImg       from '../assets/dude.png'
import phophoImg     from '../assets/phopho.png'
import npcImg        from '../assets/npc_thumb.png'
import havenThumbImg from '../assets/haven_thumb.png'

export default function Home() {
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

      {/* Scene 1 — Floating project thumbnails */}
      <main className="main-canvas">
        <img src={bgVector} className="bg-vector" alt="" aria-hidden="true" />
        <div className="bg-ellipse" aria-hidden="true" />

        <img
          className="thumb thumb--weird-fishes"
          src={weirdFishImg}
          alt="Weird Fishes"
          onClick={() => navigate('/projects/weird-fishes')}
        />
        <span className="project-label label--weird-fishes">Weird Fishes</span>

        <img
          className="thumb thumb--no-strings"
          src={dudeImg}
          alt="No Strings Attached"
          onClick={() => navigate('/projects/no-strings')}
        />
        <span className="project-label label--no-strings">No Strings Attached</span>

        <img
          className="thumb thumb--phopho"
          src={phophoImg}
          alt="Pho Pho"
          onClick={() => navigate('/projects/phopho')}
        />
        <span className="project-label label--phopho">Pho Pho</span>

        {/* Watchout — not yet linked */}
        <img
          className="thumb thumb--watchout"
          src={npcImg}
          alt="Watchout"
        />
        <span className="project-label label--watchout">Watchout</span>

        <img
          className="thumb thumb--haven"
          src={havenThumbImg}
          alt="Haven"
          onClick={() => navigate('/projects/haven')}
        />
        <span className="project-label label--haven">Haven</span>
      </main>

      {/* Scene 2 — 3D About Character (coming soon) */}
      <section className="about-scene" id="about" />
    </div>
  )
}
