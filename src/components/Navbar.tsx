function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav">
        <a href="#home" className="brand">
          Ethan Hapurne
        </a>
        <ul className="nav-links">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
