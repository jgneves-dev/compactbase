import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Solutions from "./components/Solutions";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Projects />
      <News />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
