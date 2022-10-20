import About from "./Components/About";
import CustomCursor from "./Components/CustomeCursor/CustomCursor";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
  
      <header>
        <NavBar />
      </header>
     
      <CustomCursor />
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
      
    </div>
  );
}

export default App;
