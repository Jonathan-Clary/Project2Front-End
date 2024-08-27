import { Button, Card, CardTitle, Col, Container, Dropdown, DropdownButton, DropdownItem, Row } from "react-bootstrap"

export const HelpCenterDashboard: React.FC = () =>{

    return(
        <div className="min-vh-100 w-100 p-5" style={{ backgroundColor: "white" }}>
        <Container>
            <h1 className="text-center mt-5">Welcome to Help Center</h1>
            <h5 className="text-center mt-4 mb-4">What can we help you with today?</h5>
        </Container>
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
                    <Card className="shadow text-center m-2" style={{ width: "20rem" }}>
                        <Card.Body>
                            <Card.Title>Review Support Tickets</Card.Title>
                            <Card.Text className="m-4 text-start">
                                General Support Tickets <br />
                                Have Support Tickets <br />
                                See Ticket History
                            </Card.Text>
                            <Button variant="primary" className="w-100">View Tickets</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
                    <Card className="shadow text-center m-2" style={{ width: "20rem" }}>
                        <Card.Body>
                            <Card.Title>Need Customer Support</Card.Title>
                            <Card.Text className="m-4 text-start">
                                Technical Issues<br />
                                Privacy Concerns<br />
                                General Problems or Feedback
                            </Card.Text>
                            <Button variant="primary" className="w-100">Need Support</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}