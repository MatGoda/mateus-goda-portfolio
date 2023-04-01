import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './views/Menu';
import Projects from './views/Projects';
import Curriculum from './views/Curriculum';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <Router>
        <Menu />
        <Routes >
          <Route index path='/' element={<Projects />} />
          <Route path='/curriculo' element={<Curriculum />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}