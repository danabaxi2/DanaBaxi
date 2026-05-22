import './App.css'

function App() {
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
        {/* Project thumbnails — replace divs with <img> once assets are added */}
        <div className="thumb thumb--shark" />
        <div className="thumb thumb--dude" />
        <div className="thumb thumb--haven" />
        <div className="thumb thumb--phopho" />
      </main>
    </div>
  )
}

export default App
