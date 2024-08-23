import { useState } from "react"
import { Button, Card, Col, Container, FloatingLabel, Form, FormControl, Row } from "react-bootstrap"
import './Register.css'
import DOMPurify from 'dompurify';
import axiosInstance from "../../../services/AxiosInstance";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

type FormData = {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string,
}

type FormErrors = {
    email?: string,
    firstName?: string,
    lastName?: string,
    password?: string,
    confirmPassword?: string,
}

export const Register: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null); // backend errors
    const [errors, setErrors] = useState<FormErrors>({}); // frontend errors
    const [formData, setFormData] = useState<FormData>({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
    });


    /* Validate input (using DOMPurify as well) */
    const validateForm = (): boolean => {
        let isValid = true;
        const newErrors: FormErrors = {};

        // username
        const sanitizedEmail = DOMPurify.sanitize(formData.email);
        if (!sanitizedEmail.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (sanitizedEmail !== formData.email) {
            newErrors.email = 'Email contains invalid characters'
            isValid = false;
        } else if (formData.email.length < 8) {
            newErrors.email = 'Email must be at least 8 characters long';
            isValid = false;
        }

        const numberRegex = /\d/;

        // first name
        const sanitizedFirstName = DOMPurify.sanitize(formData.firstName);
        if (!sanitizedFirstName.trim()) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        } else if (sanitizedFirstName !== formData.firstName) {
            newErrors.firstName = 'First name contains invalid characters'
            isValid = false;
        } else if (numberRegex.test(sanitizedFirstName)) {
            newErrors.firstName = 'First name should not contain numbers';
            isValid = false;
        }

        // last name
        const sanitizedLastName = DOMPurify.sanitize(formData.lastName);
        if (!sanitizedLastName.trim()) {
            newErrors.lastName = 'Last name is required';
            isValid = false;
        } else if (sanitizedLastName !== formData.lastName) {
            newErrors.lastName = 'Last name contains invalid characters'
            isValid = false;
        } else if (numberRegex.test(sanitizedLastName)) {
            newErrors.lastName = 'Last name should not contain numbers';
            isValid = false;
        }

        // password
        const sanitizedPassword = DOMPurify.sanitize(formData.password);
        if (!sanitizedPassword.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (sanitizedPassword !== formData.password) {
            newErrors.password = 'Password contains invalid characters'
            isValid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
            isValid = false;
        }

        // confirmPassword
        const sanitizedConfirmPassword = DOMPurify.sanitize(formData.confirmPassword);
        if (!sanitizedConfirmPassword.trim()) {
            newErrors.confirmPassword = 'First name is required';
            isValid = false;
        } else if (sanitizedConfirmPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'First name contains invalid characters'
            isValid = false;
        }

        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    /* HTTP REQUEST */

    const handleRegistration = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null)

        if (!validateForm()) {
            return;
        }
        try {
            const response = await axiosInstance.post('/user/register', formData);
            if (response.data) {
                // Add global toast here **
                navigate('/login');
            }
        } catch (error) {
            if (isAxiosError(error)) {
                setError(typeof error.response?.data === 'string' ? error.response.data : 'Registration Failed');
            } else {
                setError('An unexpected error occurred');
            }
        }
    };



    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100" style={{ height: '100vh' }}>
            <Card className="register-card">
                <Card.Header className="register-card-header" style={{ width: '500px' }}></Card.Header>
                <Form className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center h-100" onSubmit={handleRegistration}>
                    <h3 className="mb-4 mt-3">Register</h3>

                    <FloatingLabel controlId="email" label="Email" className="mb-3 w-100">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                            required
                        />
                        <FormControl.Feedback type="invalid">
                            {errors.email}
                        </FormControl.Feedback>
                    </FloatingLabel>

                    <FloatingLabel controlId="firstName" label="First Name" className="mb-3 w-100">
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            isInvalid={!!errors.firstName}
                            required
                        />
                        <FormControl.Feedback type="invalid">
                            {errors.firstName}
                        </FormControl.Feedback>
                    </FloatingLabel>

                    <FloatingLabel controlId="lastName" label="Last Name" className="mb-3 w-100">
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            isInvalid={!!errors.lastName}
                            required
                        />
                        <FormControl.Feedback type="invalid">
                            {errors.lastName}
                        </FormControl.Feedback>
                    </FloatingLabel>

                    <FloatingLabel controlId="password" label="Password" className="mb-3 w-100">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            isInvalid={!!errors.password}
                            required
                        />
                        <FormControl.Feedback type="invalid">
                            {errors.password}
                        </FormControl.Feedback>
                    </FloatingLabel>

                    <FloatingLabel controlId="confirmPassword" label="Confirm Password" className="mb-3 w-100">
                        <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            isInvalid={!!errors.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <FormControl.Feedback type="invalid">
                            {errors.confirmPassword}
                        </FormControl.Feedback>
                    </FloatingLabel>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <div className="d-flex justify-content-between w-50">
                        <Button className=" mb-2" variant="secondary" onClick={() => navigate('/login')}> Back</Button>
                        <Button type="submit" className=" mb-2" variant="primary"> Register</Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}