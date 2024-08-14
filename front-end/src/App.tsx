import React from 'react';
import './App.css';
import { SupportTickets } from './components/admin/support-tickets/SupportTickets';

const App: React.FC = () => {
  return (
    <div className="App">
     <SupportTickets></SupportTickets>
    </div>
  );
}

export default App;
