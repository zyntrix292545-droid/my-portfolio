import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <section id="projects" style={{ minHeight: '100vh', paddingTop: '90px' }}>Projects</section>
        <section id="contact" style={{ minHeight: '100vh', paddingTop: '90px' }}>Contact</section>
      </main>
    </>
  )
}

export default App