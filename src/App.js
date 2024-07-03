import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import SectionPage from './pages/SectionPage';
import './styles.css';

function App() {
  return (
    <div className="page-wrap">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/section/:sectionId" element={<SectionPage />} />
        <Route path="/section/:sectionId/:blogId" element={<SectionPage />} />
      </Routes>
    </div>
  );
}

export default App;