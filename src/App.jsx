import About from "./Components/About";
import CustomCursor from "./Components/CustomeCursor/CustomCursor";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App bg-black">
  
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
