function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <p className="eyebrow">Software Developer</p>
        <h1>Building clean, fast, user-focused web experiences.</h1>
        <p className="hero-text">
          I build responsive, production-ready applications with React,
          TypeScript, and modern frontend tooling.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
