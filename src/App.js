import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavBar from './components/MainNavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    AOS.init();
  }, [])

  return (
    <div className="App">
      <MainNavBar />
      
      <Routes>
        <Route index element={<HomePage />} />
        <Route exact path='/aboutme' element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
