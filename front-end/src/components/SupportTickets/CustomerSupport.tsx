import { Alert, Button, Container, FloatingLabel, Form, FormText, Toast, ToastContainer } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import createAxiosInstance from "../../services/AxiosInstance"
import { useEffect, useState } from "react"


export const CustomerSupport: React.FC = () => {
    const {user, token} = useAuth()
    const axiosInstance = createAxiosInstance(token)
    const [selected, setSelected] = useState<string | null>(null)
    const [description, setDescription] = useState<string | null>(null)
    const [show, setShow] = useState(false);

    const handleRadioButton = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value)
        console.log(e.target.value)
    }
    const handleDescription = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendTicket();
    }

    const sendTicket = async () => {
        try{
            const response = await axiosInstance.post("/support", 
                {
                    userId : user?.userId,
                    description: description,
                    type: selected
                })
            setShow(true)
            setSelected(null);
            setDescription('');
        } catch (error) {
            console.log("Error", error)
        }
    }




    return(
        <div className="min-vh-100 w-100 p-5" style={{ backgroundColor: "white" }}>
            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg="success">
                    <Toast.Header>
                        <strong className="me-auto">Success</strong>
                        <small className="text-muted">Just Now</small>
                    </Toast.Header>
                    <Toast.Body>Ticket was Submitted Successfully</Toast.Body>
                    </Toast>
                </ToastContainer>
            <Container >
                

                <h2>Welcome To Customer Support</h2>
                <p className="mt-4">If you have encountered a problem, submit a form and tell us what is happening</p>
                <Container className="shadow p-3">
                    <Form onSubmit={handleSubmit}> 
                        <h3>Submit a request</h3>
                        
                        <Form.Group controlId="radioOptions" className="mb-3">
                            <Form.Label className="mt-4 mb-2" style={{fontSize:"20px"}}>Type of Issue</Form.Label>
                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Feedback"
                                    name="options"
                                    value= "feedback"
                                    onChange={handleRadioButton}
                                    checked={selected==="feedback"}
                                    required
                                />
                                <Form.Check
                                    type="radio"
                                    label="General"
                                    name="options"
                                    value= "general"
                                    onChange={handleRadioButton}
                                    checked={selected==="general"}
                                    required
                                />
                                <Form.Check
                                    type="radio"
                                    label="Information"
                                    name="options"
                                    value= "information"
                                    onChange={handleRadioButton}
                                    checked={selected==="information"}
                                    required
                                />
                                <Form.Check
                                    type="radio"
                                    label="Privacy"
                                    name="options"
                                    value= "privacy"
                                    onChange={handleRadioButton}
                                    checked={selected==="privacy"}
                                    required
                                    
                                />
                                <Form.Check
                                    type="radio"
                                    label="Technical Issues"
                                    name="options"
                                    value= "technical_issues"
                                    checked={selected==="technical_issues"}
                                    required
                                />
                            </div>
                        </Form.Group>

                        <Form.Label style={{fontSize:"20px"}}>Description</Form.Label>
                        <Form.Control
                            as="textarea" rows={5} placeholder="Enter Description" required onChange={handleDescription}  value={description || ''}
                        ></Form.Control>
                        <Button variant="outline-dark" className="mt-4" type="submit">Submit</Button>
                    </Form>
                </Container>
            </Container>
        </div>
    )
}