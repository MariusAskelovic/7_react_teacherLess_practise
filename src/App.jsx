import './style/App.css'
import Header from "./components/Header";
import Hero from './components/Hero';
import Subhero from './components/Subhero';
import Features from './components/Features';
import Features2 from './components/Features2';

export default function App() {
  return (
    <div>
      {true && <Header />}
      {true && <Hero />}
      {true && <Subhero />}
      {true && <Features />}
      {true && <Features2 />}
    </div>
  )
}