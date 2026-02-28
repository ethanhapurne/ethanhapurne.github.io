const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Node.js',
  'Git',
  'GitHub Actions',
]

function Skills() {
  return (
    <section id="skills" className="section section-muted">
      <div className="container">
        <h2>Skills</h2>
        <div className="chips">
          {skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
