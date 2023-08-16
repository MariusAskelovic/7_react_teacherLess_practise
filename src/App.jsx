import './style/App.css'
import Header from "./components/Header";
import Hero from './components/Hero';
import Subhero from './components/Subhero';
import Features from './components/Features';
import Features2 from './components/Features2';
import Features3 from './components/Features3';
import Numbers from './components/Numbers';
import HowItWorks from './components/HowItWorks';

export default function App() {
  return (
    <div>
      {true && <Header />}
      {true && <Hero />}
      {true && <Subhero />}
      {true && <Features />}
      {true && <Features2 />}
      {true && <Features3 />}
      {true && <Numbers />}
      {true && <HowItWorks />}
    </div>
  )
}