import { useState } from "react";
import {
  Card,
  CardText,
  Carousel,
  CarouselItem,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { HotelInterface } from "../../interfaces/HotelInterface";
import createAxiosInstance from "../../services/AxiosInstance";
import { useAuth } from "../../contexts/AuthContext";

function HotelDetails(hotels: HotelInterface) {
  const [show, setShow] = useState(false);
  const { user, token } = useAuth();
  const axiosInstance = createAxiosInstance(token);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const favorite = async () => {
    const response = await axiosInstance.post("/favorites", {
      dateAdded: new Date(),
      userId: user?.userId,
      hotel: hotels,
    });
  };
  return (
    <>
      <Row>
        <Col>
          <Button className="" variant="primary" onClick={handleShow}>
            More Details
          </Button>
        </Col>
        <Col>
        <CardText>{hotels.rating} Stars 
          <br></br>
          
          <i className="bi bi-star-fill"></i>
        </CardText>
        
        </Col>
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{hotels.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Body>
            <Card.Text>{hotels.address}</Card.Text>
            <Container className="">
              <Carousel>
                <CarouselItem>
                  <Card.Img variant="top" src={hotels.image} />
                </CarouselItem>
                <CarouselItem>
                  <Card.Img variant="top" src="/images/HotelPlaceholder.jpg" />
                </CarouselItem>
                <CarouselItem>
                  <Card.Img variant="top" src="/images/login-page-image.jpg" />
                </CarouselItem>
              </Carousel>
            </Container>
            <Card.Text>Sample Room Text </Card.Text>
            <div className="d-flex justify-content-between">
              <div>Number of Guests</div>
              <input type="number" name="" id="" />
            </div>
            <div className="d-flex justify-content-between">
              <div>Check-In Date</div>
              <input type="date" name="" id="" />
            </div>
            <div className="d-flex justify-content-between">
              <div>Check-Out Date</div>
              <input type="date" name="" id="" />
            </div>
          </Card.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button className="" variant="primary" onClick={favorite}>
            Favorite
          </Button>
          <Button variant="primary">Book Hotel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HotelDetails;
