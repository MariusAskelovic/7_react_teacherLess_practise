import './style/App.css'
import Header from "./components/Header";
import Hero from './components/Hero';
import Subhero from './components/Subhero';
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      {true && <Header />}
      {true && <Hero />}
      {true && <Subhero />}
    </Fragment>
  )
}