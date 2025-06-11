import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Career from './pages/Career';
import Workshop from './pages/Workshop';
import HowItWorks from './pages/HowItWorks';
import Students from './pages/Students';
import Faq from './pages/Faq';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Career />
      <Workshop />
      
      <Students />
      <HowItWorks />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
