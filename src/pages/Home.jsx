import { useNavigate } from 'react-router-dom'
import { media } from '../data/mediaData'
import '../App.css'
import bgVector      from '../assets/bg_vector.svg'
import weirdFishImg  from '../assets/weird_fishes_thumb.png'
import dudeImg       from '../assets/dude.png'
import phophoImg     from '../assets/phopho.png'
import npcImg        from '../assets/npc_thumb.png'
import havenThumbImg from '../assets/haven_thumb.png'

const videoProps = { autoPlay: true, loop: true, muted: true, playsInline: true }

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

      {/* ── Main canvas ───────────────────────────────────────────────── */}
      <main className="main-canvas">

        {/* Background layers */}
        <img src={bgVector} className="bg-vector" alt="" aria-hidden="true" />
        <div className="bg-ellipse" aria-hidden="true" />

        {/* Project thumbnails — positions as % of 1440×866 Figma canvas */}

        {/* Weird Fishes: rel(168,190) 405×244 */}
        <img
          className="thumb thumb--weird-fishes"
          src={weirdFishImg}
          alt="Weird Fishes"
          onClick={() => navigate('/weird-fishes')}
        />
        <span className="project-label label--weird-fishes">Weird Fishes</span>

        {/* No Strings Attached: rel(952,155) 206×313 */}
        <img
          className="thumb thumb--no-strings"
          src={dudeImg}
          alt="No Strings Attached"
          onClick={() => navigate('/no-strings')}
        />
        <span className="project-label label--no-strings">No Strings Attached</span>

        {/* Pho Pho: rel(44,647) 192×322 */}
        <img
          className="thumb thumb--phopho"
          src={phophoImg}
          alt="Pho Pho"
          onClick={() => navigate('/phopho')}
        />
        <span className="project-label label--phopho">Pho Pho</span>

        {/* Watchout: rel(603,392) 234×322 — no interaction yet */}
        <img
          className="thumb thumb--watchout"
          src={npcImg}
          alt="Watchout"
        />
        <span className="project-label label--watchout">Watchout</span>

        {/* Haven: rel(881,703) 450×321 */}
        <img
          className="thumb thumb--haven"
          src={havenThumbImg}
          alt="Haven"
          onClick={() => navigate('/haven')}
        />
        <span className="project-label label--haven">Haven</span>
      </main>

      {/* ── Scroll sections (video placeholders) ─────────────────────── */}
      <section className="scroll-section" id="haven">
        <video {...videoProps} src={media.haven.haven_loader}    className="scroll-video" />
        <video {...videoProps} src={media.haven.haven_Welcome}   className="scroll-video" />
        <video {...videoProps} src={media.haven.haven_Question1} className="scroll-video" />
        <video {...videoProps} src={media.haven.haven_Question2} className="scroll-video" />
        <video {...videoProps} src={media.haven.haven_PopUp}     className="scroll-video" />
      </section>

      <section className="scroll-section" id="weird-fishes">
        <video {...videoProps} src={media.weird_fishes.Weird_Fishes_1} className="scroll-video" />
        <video {...videoProps} src={media.weird_fishes.Weird_Fishes_2} className="scroll-video" />
        <video {...videoProps} src={media.weird_fishes.Weird_Fishes_3} className="scroll-video" />
        <video {...videoProps} src={media.weird_fishes.Weird_Fishes_4} className="scroll-video" />
        <video {...videoProps} src={media.weird_fishes.Weird_Fishes_5} className="scroll-video" />
      </section>

      <section className="scroll-section" id="no-strings">
        <video {...videoProps} src={media.no_strings.No_Strings_full}       className="scroll-video" />
        <video {...videoProps} src={media.no_strings.No_Strings_kissing}    className="scroll-video" />
        <video {...videoProps} src={media.no_strings.No_Strings_hugging}    className="scroll-video" />
        <video {...videoProps} src={media.no_strings.No_Strings_goofing}    className="scroll-video" />
        <video {...videoProps} src={media.no_strings.No_Strings_toothbrush} className="scroll-video" />
      </section>

      <section className="scroll-section" id="phopho">
        <video {...videoProps} src={media.phopho.phopho_Logo}   className="scroll-video" />
        <video {...videoProps} src={media.phopho.phopho_bottle} className="scroll-video" />
      </section>
    </div>
  )
}
