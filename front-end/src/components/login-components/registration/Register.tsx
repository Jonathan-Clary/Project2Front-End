import { useState } from "react"
import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap"

export const Register: React.FC = () => {

    const[errorMessage, setErrorMessage] = useState('')


    return(
        <Container className = "d-flex justify-content-center align-items-center min-vh-100" style={{ height: '100vh' }}>
            <Card className="register-card">
                <Card.Header style={{width: '500px'}}></Card.Header>
                <Form className ="w-75 mx-auto d-flex flex-column justify-content-center align-items-center h-100">
                    <h3 className="mb-4 mt-3">Register</h3>
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 w-100">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            required

                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3 w-100">
                        <Form.Control
                            type="firstname"
                            placeholder="First Name"
                            name="First Name"
                            required

                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3 w-100">
                        <Form.Control
                            type="lastname"
                            placeholder="Last Name"
                            name="Last Name"
                            required

                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Password" className="mb-3 w-100">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                        />
                    </FloatingLabel>
                    <div className="d-flex justify-content-between w-50">
                        <Button type="submit" className=" mb-2" variant ="primary"> Log in</Button>
                        <Button type = "button" className=" mb-2" variant ="primary">Register</Button>
                    </div>
                    
                </Form>

            </Card>

        </Container>
    )
}