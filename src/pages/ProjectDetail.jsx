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

      {(project.year || project.tools.length > 0 || project.description || project.course) && (
        <footer className="project__footer">
          {(project.year || project.tools.length > 0) && (
            <div className="project__meta">
              {project.year && <span>{project.year}</span>}
              {project.tools.length > 0 && <span>[{project.tools.join(', ')}]</span>}
            </div>
          )}
          {project.description && <p className="project__desc">{project.description}</p>}
          {project.course && <p className="project__course">{project.course}</p>}
        </footer>
      )}
    </div>
  )
}
