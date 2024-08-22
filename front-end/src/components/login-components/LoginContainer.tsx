import React, { useState } from 'react';
import { UserLogin } from './user-login/UserLogin';
import { AdminLogin } from './admin-login/AdminLogin';

export const LoginContainer: React.FC = () => {
    const [isUserLogin, setIsUserLogin] = useState(true);

    const toggleLogin = () => {
        setIsUserLogin(!isUserLogin);
    };

    return (
        /*<div >
            <div>
                <button onClick={toggleLogin}>
                    {isUserLogin ? "Switch to Admin Login" : "Switch to User Login"}
                </button>
            </div>
            {isUserLogin ? <UserLogin /> : <AdminLogin />}
        </div>*/

        <>
        <UserLogin></UserLogin>
        </>
    );
};


