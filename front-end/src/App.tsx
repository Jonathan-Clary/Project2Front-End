import React from 'react';
import './App.css';
import { Temp } from './components/Temp';
import UserProfile from './components/user/profile/UserProfile';

const App: React.FC = () => {
  return (
    <div className="App">

     <h1>TESTING BOOTSTRAP</h1>
     {/* <Temp></Temp> */}
     <UserProfile />
    </div>
  );
}

export default App;
