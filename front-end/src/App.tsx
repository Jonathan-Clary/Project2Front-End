import './App.css';
import { Temp } from './components/Temp';
import { LoginContainer } from './components/login-components/LoginContainer';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';
import { Register } from './components/login-components/registration/Register';
import { Navigation } from './components/navigation/Navigation';
import UserProfile from './components/user/profile/UserProfile';
import { CustomerHomePage } from './components/customerHomePage/CustomerHomePage';
import { BookingHistory } from './components/BookingHistory';

function App() {
  const { token } = useAuth();

  return (
    <div className="App">
      {token != null ? <Navigation/> : <></>}

      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<Register/>} /> 
        <Route path="/" element={token ? <CustomerHomePage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={token ? <UserProfile /> : <Navigate to="/login" />} />
        <Route path="/booking/history" element={token ? <BookingHistory /> : <Navigate to="/login" />} />
      </Routes>

    </div >
  );
}


export default App;

