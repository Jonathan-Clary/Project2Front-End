import './App.css';
import { Temp } from './components/Temp';
import { LoginContainer } from './components/login-components/LoginContainer';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';

function App() {
  const { token } = useAuth();
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/temp" element={token ? <Temp /> : <Navigate to="/" />} />
      </Routes>

    </div >
  );
}


export default App;

