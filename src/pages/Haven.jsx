import { useNavigate } from 'react-router-dom'
import loaderImg  from '../assets/haven_loader.png'
import welcomeImg from '../assets/haven_welcome.png'
import q2aImg     from '../assets/haven_q2a.png'
import q2bImg     from '../assets/haven_q2b.png'
import popupImg   from '../assets/haven_popup.png'
import '../haven.css'

export default function Haven() {
  const navigate = useNavigate()

  return (
    <div className="haven">
      <nav className="navbar">
        <span className="navbar__logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          Dana Baxi
        </span>
        <div className="navbar__links">
          <a href="/#projects">Projects</a>
          <a href="/#about">About</a>
        </div>
      </nav>

      <header className="haven__header">
        <h1 className="haven__title">Haven</h1>
        <p className="haven__subtitle">Motion to Product Demo</p>
      </header>

      <section className="haven__screens">
        <img src={loaderImg}  alt="Haven — Loader screen"    className="haven__screen" />
        <img src={welcomeImg} alt="Haven — Welcome screen"   className="haven__screen" />
        <img src={q2aImg}     alt="Haven — Question screen"  className="haven__screen" />
        <img src={q2bImg}     alt="Haven — Question screen 2" className="haven__screen" />
        <img src={popupImg}   alt="Haven — Pop-up screen"    className="haven__screen" />
      </section>

      <footer className="haven__info">
        <div className="haven__meta">
          <span>2026</span>
          <span>[C4D, After Effects]</span>
        </div>
        <p className="haven__desc">
          Haven is a digital product designed for humanity's transition to Mars. Based on deep
          research, the aesthetic is intentionally refined yet clinical — creating a flawless,
          stable, but unsettling futuristic environment. This is a motion prototype exploring
          the tension between absolute trust and digital Detachment that leaves us to wonder:
          In a world this perfect, is there still room for being human? 3D Motion: Custom
          modeling &amp; animation in Cinema 4D. Product Flow: Branded Loader, Systemic
          Onboarding, and UI Pop ups.
        </p>
        <p className="haven__course">
          Designed as part of ׳Motion to digital product׳ course at Bezalel.
        </p>
      </footer>
    </div>
  )
}
