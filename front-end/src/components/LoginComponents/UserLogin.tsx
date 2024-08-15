import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const UserLogin: React.FC = () => {
    const [user, setUser] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const storeValues = (input: any) => {
        const { name, value } = input.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const login = async () => {

    };

    return (
        <div className="login">
            <div className="text-container">
                <h1>User Login</h1>
                <div className="input-container">
                    <input type="text" placeholder="username" name="username" onChange={storeValues} />
                </div>
                <div className="input-container">
                    <input type="password" placeholder="password" name="password" onChange={storeValues} />
                </div>
                <button className="login-button" onClick={login}>Login</button>
            </div>
        </div>
    );
};
