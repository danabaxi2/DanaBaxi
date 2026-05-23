import { useParams, useNavigate } from 'react-router-dom'
import { projectsById } from '../data/projectsData.js'
import '../App.css'
import '../project.css'

const videoProps = { autoPlay: true, loop: true, muted: true, playsInline: true }

function MediaItem({ item }) {
  if (item.type === 'video') {
    return <video {...videoProps} src={item.src} />
  }
  return <img src={item.src} alt="" />
}

export default function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = projectsById[projectId]

  if (!project) {
    return (
      <div className="project-page">
        <nav className="navbar">
          <span className="navbar__logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            Dana Baxi
          </span>
        </nav>
        <p style={{ padding: '120px 15px', textAlign: 'center' }}>Project not found.</p>
      </div>
    )
  }

  const hasFooter = project.year || project.toolsLabel || project.description || project.course

  return (
    <div className="project-page">
      <nav className="navbar">
        <span className="navbar__logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          Dana Baxi
        </span>
        <div className="navbar__links">
          <a href="/">Projects</a>
          <a href="/#about">About</a>
        </div>
      </nav>

      <header className="project__header">
        <h1 className="project__title">{project.title}</h1>
        {project.subtitle && <p className="project__subtitle">{project.subtitle}</p>}
      </header>

      <div className="project__content">
        {project.sections.map((section, i) => (
          <div key={i} className={`project__section project__section--${section.layout}`}>
            {section.items.map((item, j) => (
              <MediaItem key={j} item={item} />
            ))}
          </div>
        ))}
      </div>

      {hasFooter && (
        <footer className="project__footer">
          <div className="project__meta">
            {project.year      && <span>{project.year}</span>}
            {project.toolsLabel && <span>{project.toolsLabel}</span>}
          </div>
          {project.description && (
            <p className="project__desc">
              {project.description.split('\n').map((line, i) => (
                <span key={i}>{line}{i < project.description.split('\n').length - 1 && <br />}</span>
              ))}
            </p>
          )}
          {project.course && <p className="project__course">{project.course}</p>}
        </footer>
      )}
    </div>
  )
}
