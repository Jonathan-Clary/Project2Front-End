import React, { useState } from 'react';
import { UserLogin } from './UserLogin';
import { AdminLogin } from './AdminLogin';

export const LoginContainer: React.FC = () => {
    const [isUserLogin, setIsUserLogin] = useState(true);

    const toggleLogin = () => {
        setIsUserLogin(!isUserLogin);
    };

    return (
        <div className="login-container">
            <div className="toggle-buttons">
                <button onClick={toggleLogin}>
                    {isUserLogin ? "Switch to Admin Login" : "Switch to User Login"}
                </button>
            </div>
            {isUserLogin ? <UserLogin /> : <AdminLogin />}
        </div>
    );
};


