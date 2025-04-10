import "./styles/App.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects/Projects";
import StackSection from "@/components/Stack/StackSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="bg-neutral-100 dark:bg-neutral-800">
        <Hero />
        <Projects />
        <StackSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
