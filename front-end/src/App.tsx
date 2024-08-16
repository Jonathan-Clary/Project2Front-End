import React from 'react';
import './App.css';
import { Temp } from './components/Temp';
import { Navigation } from './components/navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App: React.FC = () => {
  return (
    <div className="App">
      

     
     <BrowserRouter>
     <Routes>
        <Route path="" element={<Navigation/>}>
          
        </Route>
     </Routes>
     </BrowserRouter>
     <h1>TESTING BOOTSTRAP</h1>
     <Temp></Temp>
     
    </div>
  );
}

export default App;
