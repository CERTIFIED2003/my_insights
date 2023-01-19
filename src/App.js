// import { useEffect } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import ScrollUp from './components/scrollup/ScrollUp';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
// import Testimonials from './components/testimonials/Testimonials';s
import Work from './components/work/Work';

function App() {
  // useEffect(() => {
  //   const handleContextmenu = e => {
  //     e.preventDefault()
  //   }
  //   document.addEventListener('contextmenu', handleContextmenu)
  //   return function cleanup() {
  //     document.removeEventListener('contextmenu', handleContextmenu)
  //   }
  // }, [])
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <div className="space--vertical-first" />
        <About />
        <div className="space--vertical" />
        <Skills />
        <div className="space--vertical" />
        <Services />
        <Qualification />
        <Work />
        {/* <Testimonials /> */}
        <div className="space--vertical" />
        <Contact />
      </main>
      <div className="space--vertical" />
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;