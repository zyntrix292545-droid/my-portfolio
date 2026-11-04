import './Hero.css'

const stats = [
  { number: '3+', label: 'Years Tutoring' },
  { number: '3+', label: 'Projects Built' },
  { number: '1', label: 'Research Paper' },
]

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="hero-tag">Hi, I am</p>
        <h1 className="hero-name">
          SHIVANI<span>.</span>
        </h1>
        <h2 className="hero-role">Full Stack Developer | Cybersecurity | IoT</h2>
        <p className="hero-desc">
          I build secure, useful web applications and connected systems,
          from farmer-friendly platforms to network intrusion detection.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-red">View Projects</a>
          <a href="/resume.pdf" download className="btn btn-outline">Download Resume</a>
        </div>

        <div className="hero-stats">
          {stats.map((item) => (
            <div key={item.label}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-image">
        <img src="/profile.jpeg" alt="Portrait of Shivani" />
      </div>
    </section>
  )
}

export default Hero
