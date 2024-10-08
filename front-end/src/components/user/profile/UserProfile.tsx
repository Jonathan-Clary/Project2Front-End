import { useEffect, useState } from "react";
import { Container, Card, Col, Row, Form, Button, Spinner, Toast } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import "./UserProfile.css"
import { useAuth } from "../../../contexts/AuthContext";
import createAxiosInstance from "../../../services/AxiosInstance";

interface User {
    userId : string,
    firstName : string,
    lastName : string,
    email : string 
  }

export default function UserProfile(){
    const {user, token} = useAuth();
    const [users, setUsers] = useState<User>({
        userId : '',
        firstName : '',
        lastName : '',
        email : '' 
      })
    const axiosInstance = createAxiosInstance(token);
    const [userId, setUserId] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [firstNameMsg, setFirstNameMsg] = useState("");
    const [lastNameMsg, setLastNameMsg] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");
    const [disableBtn, setDisableBtn] = useState(true);

    const [spin, setSpin] = useState(false);

    const getUser = async () => {
        const response = await axiosInstance.get("/user/" + user?.userId);
        setUsers(response.data);
        
      };

    // const navigate = useNavigate();
   
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/g;

    function update_info(){
        setSpin(true);
        setSuccessMessage('');
        let body1 = {'firstName':firstName, 'lastName':lastName,
            'email':email
        };
        let body2 = {'firstName':firstName, 'lastName':lastName,
            'email':email, 'password':password
        }; // typescript has limits
        let body = null;
        if(password.length>1)
            body = body2;
        else
            body = body1;
        
        axiosInstance.patch('/user', body)
            .then(function (response) {
                setSuccessMessage("Updated Successfully");
            })
            .catch((error) =>{
                if(error.response){
                    if(error.response.status == 401){
                        // localStorage.clear();
                        // navigate('/login');
                    }
                    else{
                        if(error.response.email)
                            setEmailMsg(error.response.email)
                        if(error.response.firstName)
                            setFirstNameMsg(error.response.firstName)
                        if(error.response.lastName)
                            setLastNameMsg(error.response.lastName)
                        if(error.response.password)
                            setPasswordMsg(error.response.password)
                    } 
                }
                else // if there was no response (server is off)
                    setMessage("something went wrong.");
            })
            .finally(()=>{setSpin(false)})
    }

    function validate(input:any){
        if(input.target.name == "lastName"){
            let value = input.target.value.trim();
            setLastName(value);
            if(value.length < 3)
                setLastNameMsg("please enter 3 or more characters");
            else
                setLastNameMsg("");
        }

        if(input.target.name == "firstName"){
            let value = input.target.value.trim();
            setFirstName(value);
            if(value.length < 3)
                setFirstNameMsg("please enter 3 or more characters");
            else
                setFirstNameMsg("");
        }

        if(input.target.name == "email"){
            let value = input.target.value.trim();
            setEmail(value);
            if(value.length > 0 && !value.match(isValidEmail))
                setEmailMsg("please enter a valid email");
            else
                setEmailMsg("");
        }

        if(input.target.name == "password"){
            let value = input.target.value.trim();
            setPassword(value);
            if(value.length < 4 && value.length != 0)
                setPasswordMsg("please enter 4 or more characters or leave empty if you don't want to change");
            else
                setPasswordMsg("");
        }
    }

    useEffect(()=>{
        getUser()
        if(firstName.length >= 3 && lastName.length >= 3 && email.match(isValidEmail) && (password.length > 3 || password.length == 0))
            setDisableBtn(false);
        else
            setDisableBtn(false);
        console.log({users})
    }, []);
    

    return(
        <Container className="mt-5" style={{width:'30vw'}}>
            <Card className="border border-light-subtle rounded-3 shadow">
                <Card.Body className="p-3 p-md-4 p-xl-5 q">
                    <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Update Account Info</h2>
                    <Col className="gy-2">
                        {spin && <center><Spinner animation="border" /></center>}   
                        <div className="err_msg">{message}</div>
                        <div className="success_msg">{successMessage}</div>
                        <Row>
                            <div className="err_msg">{firstNameMsg}</div>
                            <Form.Group className="mb-3">
                                <Form.FloatingLabel label="First Name">
                                <Form.Control name="firstName" id="firstName" placeholder="First Name"  onChange={validate} />
                                </Form.FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row>
                            <div className="err_msg">{lastNameMsg}</div>
                            <Form.Group className="mb-3">
                                <Form.FloatingLabel label="Last Name">
                                <Form.Control name="lastName" id="lastName" placeholder="Last Name"  onChange={validate} />
                                </Form.FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row>
                            <div className="err_msg">{emailMsg}</div>
                            <Form.Group className="mb-3">
                                <Form.FloatingLabel label="Email">
                                <Form.Control name="email" id="email" type="email" placeholder={user?.email}  onChange={validate} />
                                </Form.FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row>
                            <div className="err_msg">{passwordMsg}</div>
                            <Form.Group className="mb-3">
                                <Form.FloatingLabel label="New Password">
                                <Form.Control type="password" name="password" id="password" onChange={validate} />
                                </Form.FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row>
                            <div className="d-grid my-3">
                                <Button disabled={disableBtn} id={disableBtn ? "disabled_btn" : ""} variant="primary" size="lg" type="submit" onClick={update_info}>
                                    Update
                                </Button>
                            </div>
                        </Row>
                    </Col>
                </Card.Body>
            </Card>
        </Container>
    );
}