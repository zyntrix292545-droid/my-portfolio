import './About.css'

const education = [
  {
    title: 'B.E. in Computer Science & Engineering',
    place: 'Maharaja Institute of Technology, Mysore',
    note: 'Final year | Focus: IoT, Cyber Security, Blockchain',
  },
]

const highlights = [
  'Built projects in cybersecurity, IoT and full-stack development',
  'Co-authored research work on deepfake detection and forensics',
  'Tutored students from Class 1 to 10 for 3 years',
]

function About() {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">
        ABOUT <span>ME</span>
      </h2>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a final-year Computer Science student who enjoys building
            things that are secure and useful. My interests sit between web
            development, cybersecurity and IoT.
          </p>
          <p>
            Teaching for three years taught me to explain complex ideas
            simply, and I bring the same habit to my code and documentation.
          </p>

          <ul className="about-highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="about-education">
          <h3>Education</h3>
          {education.map((edu) => (
            <div className="edu-card" key={edu.title}>
              <h4>{edu.title}</h4>
              <p>{edu.place}</p>
              <span>{edu.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About