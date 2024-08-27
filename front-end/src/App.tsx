import './App.css';
import { LoginContainer } from './components/login-components/LoginContainer';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';
import { Register } from './components/login-components/registration/Register';
import { Navigation } from './components/navigation/Navigation';
import UserProfile from './components/user/profile/UserProfile';
import { CustomerHomePage } from './components/customerHomePage/CustomerHomePage';
import { BookingHistory } from './components/BookingHistory';
import { TempLogin } from './components/login-components/user-login/temp';
import { HelpCenterDashboard} from './components/SupportTickets/HelpCenterDashboard';
import { ReviewSupportTickets } from './components/SupportTickets/ReviewSupportTickets';
import { CustomerSupport } from './components/SupportTickets/CustomerSupport';

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
        <Route path="/temp" element={<TempLogin/>}/>
        <Route path="/user/help" element={ token? <HelpCenterDashboard/> : <Navigate to="/login"/>} />
        <Route path="/user/tickets" element={token? <ReviewSupportTickets/>: <Navigate to ="/login"/>} />
        <Route path ="/customer/support" element={token? < CustomerSupport/>: <Navigate to ="/login"/>} />  
      </Routes>

    </div >
  );
}


export default App;

