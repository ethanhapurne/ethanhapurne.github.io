function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav">
        <a href="#home" className="brand">
          My Portfolio
        </a>
        <ul className="nav-links">
          <li>
            <a href="#background">My Background</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
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
