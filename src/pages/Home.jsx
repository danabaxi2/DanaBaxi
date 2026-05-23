import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { media } from '../data/mediaData.js'
import '../App.css'
import bgVector from '../assets/bg_vector.svg'
import dudeImg  from '../assets/dude.png'
import phophoImg from '../assets/phopho.png'
import npcImg   from '../assets/npc_thumb.png'

const videoProps = {
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  controls: false,
}

export default function Home() {
  const navigate = useNavigate()

  // scrollYProgress: 0 at page top → 1 at page bottom
  // With min-height: 300vh, progress 0→0.5 covers Scene 1, 0.5→1 covers Scene 2
  const { scrollYProgress } = useScroll()

  // ── Depth layers (back → front) ───────────────────────────────────────
  // Z-index visualized: bg (deepest) … labels (shallowest/closest to camera)

  // Layer 0 — background decorations (deepest, barely move)
  const bgVectorY  = useTransform(scrollYProgress, [0, 0.5], [0, -20])
  const bgEllipseY = useTransform(scrollYProgress, [0, 0.5], [0, -10])

  // Layer 1 — Haven banner: bottom-right corner, far from camera
  const havenY     = useTransform(scrollYProgress, [0, 0.5], [0, -80])
  const havenLabel = useTransform(scrollYProgress, [0, 0.5], [0, -95])

  // Layer 2 — PHo PHo bottle: left edge, mid-far
  const phophoY     = useTransform(scrollYProgress, [0, 0.5], [0, -120])
  const phophoLabel = useTransform(scrollYProgress, [0, 0.5], [0, -138])

  // Layer 3 — Watchout NPC: center, mid distance
  const watchoutY     = useTransform(scrollYProgress, [0, 0.5], [0, -160])
  const watchoutLabel = useTransform(scrollYProgress, [0, 0.5], [0, -178])

  // Layer 4 — Weird Fishes banner: upper-left, near
  const weirdY     = useTransform(scrollYProgress, [0, 0.5], [0, -220])
  const weirdScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.06])
  const weirdLabel = useTransform(scrollYProgress, [0, 0.5], [0, -242])

  // Layer 5 — No Strings dude: upper-right, foreground (closest)
  const noStringsY     = useTransform(scrollYProgress, [0, 0.5], [0, -280])
  const noStringsScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.09])
  const noStringsLabel = useTransform(scrollYProgress, [0, 0.5], [0, -305])

  // ── Scene transitions ─────────────────────────────────────────────────
  const scene1Opacity = useTransform(scrollYProgress, [0.38, 0.52], [1, 0])
  const scene2Opacity = useTransform(scrollYProgress, [0.44, 0.58], [0, 1])

  return (
    <div className="portfolio">
      <nav className="navbar">
        <span className="navbar__logo">Dana Baxi</span>
        <div className="navbar__links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Sticky viewport — both scenes live here */}
      <div className="scene-wrapper">

        {/* ── Scene 1: Parallax canvas ─────────────────────────────── */}
        <motion.main className="main-canvas" style={{ opacity: scene1Opacity }}>

          {/* Background — deepest layer */}
          <motion.img
            src={bgVector}
            className="bg-vector"
            alt=""
            aria-hidden="true"
            style={{ y: bgVectorY }}
          />
          <motion.div
            className="bg-ellipse"
            aria-hidden="true"
            style={{ y: bgEllipseY }}
          />

          {/* Haven banner — far, bottom-right */}
          <motion.video
            className="thumb thumb--haven"
            {...videoProps}
            src={media.banners.Haven_banner}
            style={{ y: havenY }}
            onClick={() => navigate('/projects/haven')}
          />
          <motion.span className="project-label label--haven" style={{ y: havenLabel }}>
            Haven
          </motion.span>

          {/* PHo PHo bottle — mid-far, left edge */}
          <motion.img
            className="thumb thumb--phopho"
            src={phophoImg}
            alt="Pho Pho"
            style={{ y: phophoY }}
            onClick={() => navigate('/projects/phopho')}
          />
          <motion.span className="project-label label--phopho" style={{ y: phophoLabel }}>
            Pho Pho
          </motion.span>

          {/* Watchout NPC — mid distance, center */}
          <motion.img
            className="thumb thumb--watchout"
            src={npcImg}
            alt="Watchout"
            style={{ y: watchoutY }}
          />
          <motion.span className="project-label label--watchout" style={{ y: watchoutLabel }}>
            Watchout
          </motion.span>

          {/* Weird Fishes banner — near, upper-left */}
          <motion.video
            className="thumb thumb--weird-fishes"
            {...videoProps}
            src={media.banners.Weird_fishes_banner}
            style={{ y: weirdY, scale: weirdScale }}
            onClick={() => navigate('/projects/weird-fishes')}
          />
          <motion.span className="project-label label--weird-fishes" style={{ y: weirdLabel }}>
            Weird Fishes
          </motion.span>

          {/* No Strings Attached — foreground, upper-right */}
          <motion.img
            className="thumb thumb--no-strings"
            src={dudeImg}
            alt="No Strings Attached"
            style={{ y: noStringsY, scale: noStringsScale }}
            onClick={() => navigate('/projects/no-strings')}
          />
          <motion.span className="project-label label--no-strings" style={{ y: noStringsLabel }}>
            No Strings Attached
          </motion.span>
        </motion.main>

        {/* ── Scene 2: About (placeholder) ─────────────────────────── */}
        <motion.section
          className="about-scene"
          id="about"
          style={{ opacity: scene2Opacity }}
        >
          {/* 3D About Character — coming soon */}
        </motion.section>
      </div>
    </div>
  )
}
