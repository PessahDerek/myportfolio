import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StickyNavBar from './components/StickyNavBar';
import Portfolio from './pages/Portfolio';
import WorkWithMe from './pages/WorkWithMe';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Funny from './components/Funny';

function App() {
    useEffect(()=>{
        AOS.init()
    }, [])
    const [pos, setPos] = useState({x: 0, y: 0})

    document.addEventListener('mousemove', cur=>{
        if((cur.clientX - 25 < window.innerWidth) && (cur.clientY - 25 < window.innerHeight)) return setPos({x: cur.clientX - 25, y: cur.clientY - 60})
    })

  return (
    <div className="App">
        <NavBar />
        <StickyNavBar />
        <Funny pos={pos} />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/workwithme" element={<WorkWithMe />} />
        </Routes>
    </div>
  );
}

export default App;
