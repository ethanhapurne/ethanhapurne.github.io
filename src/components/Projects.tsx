const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio built with React and Vite, deployed via GitHub Pages.',
    stack: ['React', 'TypeScript', 'Vite'],
    link: 'https://github.com/ethanhapurne/Portfolio-Website',
  },
  {
    title: 'Task Management App',
    description:
      'A productivity app with filtering, local persistence, and accessible keyboard navigation.',
    stack: ['React', 'Hooks', 'CSS'],
    link: 'https://github.com/ethanhapurne',
  },
  {
    title: 'Data Dashboard',
    description:
      'An interactive dashboard that visualizes key metrics and trends from API-driven data.',
    stack: ['TypeScript', 'Charts', 'REST API'],
    link: 'https://github.com/ethanhapurne',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="stack">{project.stack.join(' • ')}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
