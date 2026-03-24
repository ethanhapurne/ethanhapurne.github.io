const projects = [
  {
    title: 'ML-Powered Calendar Scheduler',
    description:
      'Built a smart calendar that uses machine learning to predict user scheduling patterns and organize events more efficiently.',
    stack: ['Python', 'Machine Learning', 'HTML'],
    link: 'https://github.com/ethanhapurne/Calendar',
  },
  {
    title: '2D Fighting Game',
    description:
      'Developed a multiplayer fighting game inspired by Super Smash Bros with custom characters, combat systems, and a polished interface.',
    stack: ['Python', 'Pygame'],
    link: 'https://github.com/ethanhapurne',
  },
  {
    title: 'Lost & Found Social Media Platform',
    description:
      'Engineered a Java-based social platform with authentication, messaging, moderation tools, and Firebase-backed real-time CRUD operations.',
    stack: ['Java', 'Firebase', 'REST API'],
    link: 'https://github.com/ethanhapurne/CSC207-Miao-Miao',
  },
  {
    title: 'Columns-Style Puzzle Game',
    description:
      'Created a retro puzzle game in MIPS assembly featuring falling-piece logic, match detection, scoring, and low-level memory management.',
    stack: ['MIPS Assembly'],
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
