import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import axiosInstance from "../services/AxiosInstance";
import { useNavigate } from "react-router-dom";

interface User {
    userId: number;
    email: string;
}

interface AuthContextType {
    token: string | null;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    //TODO LOGOUT
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();
    //  TODO: use Effect / API CALL for log in / logout token delete

    useEffect(() => {
        const storedJwtToken = localStorage.getItem('token');
        if (storedJwtToken) {
            setToken(storedJwtToken);
        }
    }, []);

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


    return (
        <AuthContext.Provider value={{ token, user, login }}>
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