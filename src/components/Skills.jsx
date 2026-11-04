import './Skills.css'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Web Development',
    items: ['React', 'Node.js', 'Express', 'Flask'],
  },
  {
    title: 'Security & IoT',
    items: ['Network Security', 'Intrusion Detection', 'ESP32', 'Malware Analysis'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">
        MY <span>SKILLS</span>
      </h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills