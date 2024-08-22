import './App.css';
import { Temp } from './components/Temp';
import { LoginContainer } from './components/login-components/LoginContainer';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';
import { Register } from './components/login-components/registration/Register';
import { Navigation } from './components/navigation/Navigation';

function App() {
  const { token } = useAuth();

  return (
    <div className="App">
      {token != null ? <Navigation/> : <></>}

      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/temp" element={token ? <Temp /> : <Navigate to="/" />} />
        <Route path="/register" element={<Register/>} /> //
      </Routes>

    </div >
  );
}


export default App;

