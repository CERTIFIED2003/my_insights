import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <div className="space--vertical" />
        <About />
        <div className="space--vertical" />
        <Skills />
        <div className="space--vertical" />
        <Services />
        <Qualification />
      </main>
    </>
  );
}

export default App;