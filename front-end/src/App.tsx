import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from './components/analytics/Analytics';
import TableView from './components/analytics/TableView';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/analytics/:view" element={<TableView />} />
      </Routes>
    </Router>
  );
};

export default App;