import { Container, Form } from "react-bootstrap"

export const CustomerSupport: React.FC = () => {
    return(
        <div className="min-vh-100 w-100 p-5" style={{ backgroundColor: "white" }}>
            <Container >
                <h3>Welcome To Customer Support</h3>
                <p className="mt-4">If you have encountered a problem, submit a form and tell us what is happening</p>
                <Form>
                    
                </Form>
            </Container>
        </div>
    )
}