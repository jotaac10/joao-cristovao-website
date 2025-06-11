import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import UnityGame from "./sections/UnityGame";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogo" element={<UnityGame />} />
      </Routes>
    </Router>
  );
}

export default App;
