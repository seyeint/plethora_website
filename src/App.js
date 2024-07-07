import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import SectionPage from './pages/SectionPage';
import Why from './pages/Why';
import './styles.css';

function App() {
  return (
    <div className="page-wrap">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who" element={<AboutMe />} />
        <Route path="/what" element={<Home />} />
        <Route path="/why" element={<Why />} />
        <Route path="/section/:sectionId" element={<SectionPage />} />
        <Route path="/section/:sectionId/:blogId" element={<SectionPage />} />
      </Routes>
    </div>
  );
}

export default App;