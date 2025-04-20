import "./styles/App.css";
import SideBarSwitchFixed from "@/components/index/SideBar/SideBarSwitchFixed";
import Header from "@/components/index/Header/Header";
import SideBar from "@/components/index/SideBar/SideBar";
import Hero from "@/components/index/Hero";
import Projects from "@/components/index/Projects/Projects";
import Skills from "@/components/index/Skills";
import About from "@/components/index/About";
import Footer from "@/components/index/Footer";
import Contact from "@/components/index/Contact";
import { useState, useEffect } from "react";

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  useEffect(() => {
    // NavBar and Nav Icon
    const handleScroll = () => {
      const scrolled = window.scrollY > 98;
      setIsHeaderVisible(!scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [navState, setNavPos] = useState(false);
  const toggleNav = () => {
    setNavPos(!navState);
  };

  return (
    <div className="relative">
      <Header toggleNav={toggleNav} />
      {!isHeaderVisible && !navState && (
        <SideBarSwitchFixed toggleNav={toggleNav} />
      )}
      <SideBar navState={navState} toggleNav={toggleNav} />
      <main className="bg-neutral-100 dark:bg-neutral-800">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
