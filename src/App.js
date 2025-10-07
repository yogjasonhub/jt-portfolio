import './App.css';
import { ThemeProvider } from './theme/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import headshotImage from './assets/logos/my-headshot.jpeg';

function MainContent() {

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark pt-[70px] flex flex-col">
      <Navbar />
      
      <section 
        id="home" 
        className="flex flex-row items-center p-8 md:p-16 min-h-[80vh] max-w-7xl mx-auto bg-surface-light dark:bg-surface-dark"
      >
        <div className="flex-1 pr-8">
          <h1 className="text-4xl mb-4 text-text-light dark:text-text-dark font-bold">
            Welcome to my page!
          </h1>
          <p className="text-xl text-textSecondary-light dark:text-textSecondary-dark">
            I'm <b>Jason Thao</b>, a Software Engineer currently at Community Care, Inc.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src={headshotImage} 
            alt="Profile headshot"
            className="w-[400px] h-[400px] object-cover rounded-full object-top"
          />
        </div>
      </section>

      <main>
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </Router>
  );
}

export default App;
