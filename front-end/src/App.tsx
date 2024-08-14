import React from 'react';
import './App.css';
import { Temp } from './components/Temp';
import { CustomerHomePage } from './components/customerHomePage/CustomerHomePage';

const App: React.FC = () => {
  return (
    <div className="App">

     <h1>TESTING BOOTSTRAP</h1>
     <Temp></Temp>
     <CustomerHomePage></CustomerHomePage>
    </div>
  );
}

export default App;
