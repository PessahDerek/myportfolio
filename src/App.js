import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StickyNavBar from './components/StickyNavBar';
import Portfolio from './pages/Portfolio';
import WorkWithMe from './pages/WorkWithMe';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
    useEffect(()=>{
        AOS.init()
    }, [])
   

  return (
    <div className="App">
        <NavBar />
        {window.innerWidth < 600 && <StickyNavBar />}
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/workwithme" element={<WorkWithMe />} />
        </Routes>
    </div>
  );
}

export default App;
