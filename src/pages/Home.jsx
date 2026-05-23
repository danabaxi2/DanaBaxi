import { useNavigate } from 'react-router-dom'
import { media } from '../data/mediaData'
import '../App.css'
import sharkImg  from '../assets/shark.png'
import dudeImg   from '../assets/dude.png'
import havenImg  from '../assets/haven.png'
import phophoImg from '../assets/phopho.png'

// Shared video props: autoplay, loop, muted, inline — required for autoplay on all browsers
const videoProps = {
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
}

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

      {/* ── Main canvas: project thumbnail grid ─────────────────────── */}
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

      {/* ── Haven scroll section ─────────────────────────────────────── */}
      <section className="scroll-section" id="haven">
        <video {...videoProps} src={media.haven.haven_loader}    className="scroll-video" />
        <video {...videoProps} src={media.haven.haven_Welcome}   className="scroll-video" />
        <video {...videoProps} src={media.haven.haven_Question1} className="scroll-video" />
        <video {...videoProps} src={media.haven.haven_Question2} className="scroll-video" />
        <video {...videoProps} src={media.haven.haven_PopUp}     className="scroll-video" />
      </section>

      {/* ── Weird Fishes scroll section ──────────────────────────────── */}
      <section className="scroll-section" id="weird-fishes">
        <video {...videoProps} src={media.weird_fishes.Weird_Fishes_1} className="scroll-video" />
        <video {...videoProps} src={media.weird_fishes.Weird_Fishes_2} className="scroll-video" />
        <video {...videoProps} src={media.weird_fishes.Weird_Fishes_3} className="scroll-video" />
        <video {...videoProps} src={media.weird_fishes.Weird_Fishes_4} className="scroll-video" />
        <video {...videoProps} src={media.weird_fishes.Weird_Fishes_5} className="scroll-video" />
      </section>

      {/* ── No Strings Attached scroll section ──────────────────────── */}
      <section className="scroll-section" id="no-strings">
        <video {...videoProps} src={media.no_strings.No_Strings_full}        className="scroll-video" />
        <video {...videoProps} src={media.no_strings.No_Strings_kissing}     className="scroll-video" />
        <video {...videoProps} src={media.no_strings.No_Strings_hugging}     className="scroll-video" />
        <video {...videoProps} src={media.no_strings.No_Strings_goofing}     className="scroll-video" />
        <video {...videoProps} src={media.no_strings.No_Strings_toothbrush}  className="scroll-video" />
      </section>

      {/* ── PHOPHO scroll section ────────────────────────────────────── */}
      <section className="scroll-section" id="phopho">
        <video {...videoProps} src={media.phopho.phopho_Logo}   className="scroll-video" />
        <video {...videoProps} src={media.phopho.phopho_bottle} className="scroll-video" />
      </section>
    </div>
  )
}
