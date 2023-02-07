import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Spray from './assets/img/paint-spray.svg';
import Contact from './components/Contact';
import Alert from './components/Alert';
import Footer from './components/Footer';

function App() {
  return (
    <div className="containerApp">
      <Navbar />
      <main className="content">
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {/* <Alert /> */}
      {/* <img className="spray" src={Spray} alt="" /> */}
    </div>
  );
}

export default App;
