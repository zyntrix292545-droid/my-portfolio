import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" style={{ minHeight: '100vh', paddingTop: '90px' }}>Home</section>
        <section id="about" style={{ minHeight: '100vh', paddingTop: '90px' }}>About</section>
        <section id="skills" style={{ minHeight: '100vh', paddingTop: '90px' }}>Skills</section>
        <section id="projects" style={{ minHeight: '100vh', paddingTop: '90px' }}>Projects</section>
        <section id="contact" style={{ minHeight: '100vh', paddingTop: '90px' }}>Contact</section>
      </main>
    </>
  )
}

export default App