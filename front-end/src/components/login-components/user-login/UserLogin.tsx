import React, { useState } from 'react';
import { Button, Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import './UserLogin.css';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const UserLogin: React.FC = () => {

    /* TODO: INPUT VALIDATION (DOM PURIFY?) */


    /* const [user, setUser] = useState({ username: "", password: "" });
     const navigate = useNavigate();
 
     const storeValues = (input: any) => {
         const { name, value } = input.target;
         setUser((prevUser) => ({ ...prevUser, [name]: value }));
     };
 
     const login = async () => {
 
     };*/

    const { login } = useAuth();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(email, password);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };


    return (
        /* <div className="login">
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
         </div> */

        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card className="login-card shadow">
                <Card.Header className='login-card-header'>
                </Card.Header>
                <Form className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center h-100" onSubmit={handleLogin}>
                    <h3 className="mb-4 mt-3">Login</h3>
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 w-100">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 w-100">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            required
                        />
                    </FloatingLabel>

                    <Button type="submit" className="w-50 mb-2" variant="primary">
                        Log In
                    </Button>

                    <hr className="my-4" style={{ width: '100%', borderTop: '1px solid #000' }} />

                    <h6 className="text-center">Don't Have an account?</h6>
                    <Button
                        type="button"
                        className="w-100 mt-2 mb-4"
                        variant="secondary"
                        onClick={() => navigate('/register')}
                    >
                        Register
                    </Button>
                </Form>
            </Card>
        </Container>

    );
};
