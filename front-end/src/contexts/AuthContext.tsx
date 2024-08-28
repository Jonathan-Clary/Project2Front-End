import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import createAxiosInstance from "../services/AxiosInstance";

// local interface in the event for context only (global interface will most likely change)
interface User {
    userId: string;
    email: string;
}

interface AuthContextType {
    token: string | null;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); // loading state to ensure token is set so every refresh will not return to login page.
    const navigate = useNavigate();
    const axiosInstance = createAxiosInstance(token);


    // Refresh check local storage for token and reassigned to ensure token loss does not occur
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId')!;
        console.log("storedUserId", storedUserId)
        const storedEmail = localStorage.getItem('email');
        const user: User = {userId: storedUserId, email: storedEmail!}
        setUser(user)
        const storedJwtToken = localStorage.getItem('token');
        if (storedJwtToken) {
            setToken(storedJwtToken);
        }
       
        setLoading(false);
       
    }, []);
    
    // Render loading text in the event that a slow load occurs. 
    if (loading) {
        return <div>Authenticating...</div>
    }



    const login = async (email: string, password: string) => {
        try {
            
            const response = await axiosInstance.post('/auth/login', { email, password });
            const { token, userId, email: userEmail }: { token: string; userId: string, email: string } = response.data;
            setToken(token);
            //console.log("token", token)
            const user: User = { userId, email: userEmail};
            //console.log(user)
            localStorage.setItem('token', token); // storing token in local storage (user browser temp storage)
            localStorage.setItem('userId', userId.toString());
            console.log(userId)
            localStorage.setItem('email', userEmail.toString());
            setUser(user);
            navigate('/');
            console.log('login successful');
           // console.log(response.data)
        } catch (error) {
            console.error('Login Failed: ', error);
        }
    }

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    };


    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Think of this as our custom useState() method but instead of useState we are using useAuth to access items from this context. 
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used with Auth Provider');
    }
    return context;
}