import About from './Components/About'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import Portfolio from './Components/Portfolio'
import { createNoise2D } from 'simplex-noise';

function App() {


  return (
    <div className='App' >

      <header>
        <NavBar />
      </header>
      <div class="cursor cursor--small"></div>
      <canvas class="cursor cursor--canvas" resize></canvas>
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
    </div>
  )
}

export default App
