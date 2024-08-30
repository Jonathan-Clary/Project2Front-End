import { Button, CardText, Modal, Card, Container, Carousel, CarouselItem } from "react-bootstrap"
import StarRating from "../customerHomePage/StarRating"
import { HotelInterface } from "../../interfaces/HotelInterface"
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import createAxiosInstance from "../../services/AxiosInstance";

function ReviewComponent(hotels:HotelInterface) {

    const [show, setShow] = useState(false);
    const { user, token } = useAuth();
    const axiosInstance = createAxiosInstance(token);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <div className="d-flex justify-content-between ">
        <Button variant="dark" onClick={handleShow}>
          Leave a Review
        </Button>
        <div className="d-flex flex-column justify-content-center align-items-center p-1" style={{ height: '2.5rem' }}>
          <span>
          </span>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Leave a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Body>
            <Card.Text>{hotels.address}</Card.Text>
            <Container className="">
              
            </Container>
            <Card.Text>Sample Room Text </Card.Text>
            
          </Card.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary" >Submit</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default ReviewComponent