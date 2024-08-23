import { useState } from "react";
import { Card, Carousel, CarouselItem, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { HotelInterface } from "../../interfaces/HotelInterface";
import axios from "axios";

function HotelDetails(hotels: HotelInterface) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const favorite = async () =>{
      const response = await axios.post(
        " http://localhost:8080/favorite",
        {
          dateAdded : new Date(),
          userId : 1,
          hotelId : hotels.hotelId
        }
      );
  }
  return (
    <>
      <Button className="" variant="primary" onClick={handleShow}>
        More Details
      </Button>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{hotels.hotelName}  Name Goes Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Body>
            <Card.Text>{hotels.address} Description goes here</Card.Text>
            <Container className="d-flex flex-fill flex-wrap  justify-content-center">
              <Carousel variant="dark">
                <CarouselItem className="d-flex">
                  <Card.Img variant="top" src="logo192.png" />
                </CarouselItem>
                <CarouselItem className="d-flex">
                  <Card.Img variant="top" src="logo192.png" />
                </CarouselItem>
                <CarouselItem className="d-flex">
                  <Card.Img variant="top" src="logo192.png" />
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
