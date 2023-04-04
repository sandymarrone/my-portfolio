import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Spray from './assets/img/paint-spray.svg';
import Contact from './components/Contact';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3800);
    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="containerApp">
      <Navbar />
      <main className="content">
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
