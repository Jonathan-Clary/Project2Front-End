import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import axiosInstance from "../services/AxiosInstance";
import { useNavigate } from "react-router-dom";

// local interface in the event for context only (global interface will most likely change)
interface User {
    userId: number;
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
    


    // Refresh check local storage for token and reassigned to ensure token loss does not occur
    useEffect(() => {
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
            const { token, user }: { token: string; user: User } = response.data;
            setToken(token);
            setUser(user);
            localStorage.setItem('token', token);
            // Navigating to temp comp add conditional to nav to admin or user??
            navigate('/temp');
            console.log('login successful');
           // console.log(token)
           // console.log(response.data)
        } catch (error) {
            console.error('Login Failed: ', error);
        }
    }

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
    };


    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const  useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used with Auth Provider');
    }
    return context;
}