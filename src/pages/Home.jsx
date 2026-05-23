import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { media } from '../data/mediaData.js'
import '../App.css'
import bgVector         from '../assets/bg_vector.svg'
import dudeImg          from '../assets/dude.png'
import phophoBottleImg  from '../assets/phopho_bottle_banner.png'
import watchoutGifImg   from '../assets/watchout_banner.png'

const videoProps = { autoPlay: true, loop: true, muted: true, playsInline: true, controls: false }

// Hover label transition — matches Figma's DISSOLVE 0.08s ease-out
const labelVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.08, ease: 'easeOut' } },
  exit:   { opacity: 0, transition: { duration: 0.08, ease: 'easeIn' } },
}

// Per-depth layer: [mouseX_range, mouseY_range, scrollY_max]
// Deeper layers (bg) move less; foreground layers move more
const LAYERS = {
  bg:        { mx: 5,  my: 3,  sy: -20  },
  far:       { mx: 10, my: 6,  sy: -40  },
  midFar:    { mx: 20, my: 12, sy: -70  },
  mid:       { mx: 28, my: 16, sy: -100 },
  near:      { mx: 38, my: 22, sy: -140 },
  foreground:{ mx: 50, my: 28, sy: -180 },
}

function useLayerMotion(layer, mouseXSpring, mouseYSpring, scrollY) {
  const { mx, my, sy } = LAYERS[layer]
  const x        = useTransform(mouseXSpring, [-1, 1], [-mx, mx])
  const yMouse   = useTransform(mouseYSpring, [-1, 1], [-my, my])
  const yScroll  = useTransform(scrollY,      [0, 600], [0, sy])
  // Combine mouse Y + scroll Y
  const y = useTransform([yMouse, yScroll], ([m, s]) => m + s)
  return { x, y }
}

export default function Home() {
  const navigate = useNavigate()
  const [hoveredId, setHoveredId] = useState(null)

  // ── Mouse tracking ────────────────────────────────────────────────────
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springCfg = { damping: 30, stiffness: 60, mass: 0.8 }
  const mouseXSpring = useSpring(rawX, springCfg)
  const mouseYSpring = useSpring(rawY, springCfg)

  const handleMouseMove = (e) => {
    rawX.set((e.clientX / window.innerWidth  - 0.5) * 2)
    rawY.set((e.clientY / window.innerHeight - 0.5) * 2)
  }

  // ── Scroll tracking ───────────────────────────────────────────────────
  const { scrollY } = useScroll()

  // ── Per-layer parallax ────────────────────────────────────────────────
  const bgLayer         = useLayerMotion('bg',         mouseXSpring, mouseYSpring, scrollY)
  const ellipseLayer    = useLayerMotion('bg',         mouseXSpring, mouseYSpring, scrollY)
  const havenLayer      = useLayerMotion('far',        mouseXSpring, mouseYSpring, scrollY)
  const phophoLayer     = useLayerMotion('midFar',     mouseXSpring, mouseYSpring, scrollY)
  const watchoutLayer   = useLayerMotion('mid',        mouseXSpring, mouseYSpring, scrollY)
  const weirdLayer      = useLayerMotion('near',       mouseXSpring, mouseYSpring, scrollY)
  const noStringsLayer  = useLayerMotion('foreground', mouseXSpring, mouseYSpring, scrollY)

  const weirdScale     = useTransform(scrollY, [0, 600], [1, 1.06])
  const noStringsScale = useTransform(scrollY, [0, 600], [1, 1.09])

  // ── Hover helpers ─────────────────────────────────────────────────────
  const hoverProps = (id) => ({
    onMouseEnter: () => setHoveredId(id),
    onMouseLeave: () => setHoveredId(null),
  })

  return (
    <div className="portfolio" onMouseMove={handleMouseMove}>
      <nav className="navbar">
        <span className="navbar__logo">Dana Baxi</span>
        <div className="navbar__links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* ── Scene 1: sticky spatial canvas ─────────────────────────── */}
      <div className="scene-wrapper">
        <main className="main-canvas">

          {/* Background — deepest Z */}
          <motion.img
            src={bgVector}
            className="bg-vector"
            alt=""
            aria-hidden="true"
            style={bgLayer}
          />
          <motion.div
            className="bg-ellipse"
            aria-hidden="true"
            style={ellipseLayer}
          />

          {/* Haven banner — far, bottom-right (mostly below fold) */}
          <motion.div
            className="thumb-slot thumb-slot--haven"
            style={havenLayer}
            onClick={() => navigate('/projects/haven')}
            {...hoverProps('haven')}
          >
            <video className="thumb-media" {...videoProps} src={media.banners.Haven_banner} />
            <AnimatePresence>
              {hoveredId === 'haven' && (
                <motion.span className="thumb-label" variants={labelVariants} initial="hidden" animate="visible" exit="exit">
                  Haven
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* PHo PHo bottle — mid-far, left edge (partially off-canvas) */}
          <motion.div
            className="thumb-slot thumb-slot--phopho"
            style={phophoLayer}
            onClick={() => navigate('/projects/phopho')}
            {...hoverProps('phopho')}
          >
            <img className="thumb-media" src={phophoBottleImg} alt="Pho Pho" />
            <AnimatePresence>
              {hoveredId === 'phopho' && (
                <motion.span className="thumb-label" variants={labelVariants} initial="hidden" animate="visible" exit="exit">
                  Pho Pho
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Watchout GIF — mid, center */}
          <motion.div
            className="thumb-slot thumb-slot--watchout"
            style={watchoutLayer}
            {...hoverProps('watchout')}
          >
            <img className="thumb-media" src={watchoutGifImg} alt="Watchout" />
            <AnimatePresence>
              {hoveredId === 'watchout' && (
                <motion.span className="thumb-label" variants={labelVariants} initial="hidden" animate="visible" exit="exit">
                  Watchout
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Weird Fishes banner — near, upper-left */}
          <motion.div
            className="thumb-slot thumb-slot--weird-fishes"
            style={{ ...weirdLayer, scale: weirdScale }}
            onClick={() => navigate('/projects/weird-fishes')}
            {...hoverProps('weird-fishes')}
          >
            <video className="thumb-media" {...videoProps} src={media.banners.Weird_fishes_banner} />
            <AnimatePresence>
              {hoveredId === 'weird-fishes' && (
                <motion.span className="thumb-label" variants={labelVariants} initial="hidden" animate="visible" exit="exit">
                  Weird Fishes
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* No Strings Attached — foreground, upper-right */}
          <motion.div
            className="thumb-slot thumb-slot--no-strings"
            style={{ ...noStringsLayer, scale: noStringsScale }}
            onClick={() => navigate('/projects/no-strings')}
            {...hoverProps('no-strings')}
          >
            <img className="thumb-media" src={dudeImg} alt="No Strings Attached" />
            <AnimatePresence>
              {hoveredId === 'no-strings' && (
                <motion.span className="thumb-label" variants={labelVariants} initial="hidden" animate="visible" exit="exit">
                  No Strings Attached
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

        </main>
      </div>

      {/* Scroll room — gives parallax elements travel distance */}
      <div className="scroll-room" />

      {/* ── Scene 2: About ───────────────────────────────────────── */}
      <section className="about-scene" id="about">
        {/* 3D About Character — coming soon */}
      </section>
    </div>
  )
}
