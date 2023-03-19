import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StickyNavBar from './components/StickyNavBar';
import Portfolio from './pages/Portfolio';
import WorkWithMe from './pages/WorkWithMe';

function App() {
  return (
    <div className="App">
        <NavBar />
        <StickyNavBar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/workwithme" element={<WorkWithMe />} />
        </Routes>
    </div>
  );
}

export default App;
