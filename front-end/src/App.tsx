import React from 'react';
import './App.css';
import { Temp } from './components/Temp';
import { LoginContainer } from './components/LoginComponents/LoginContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

