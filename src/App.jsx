import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Feature from './features/index';
import NotFound from './components/pages/NotFound';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feature/>} />
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;