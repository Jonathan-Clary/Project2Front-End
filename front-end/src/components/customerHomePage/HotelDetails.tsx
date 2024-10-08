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
import StarRating from "./StarRating";
import ReviewCard from "../reviews/ReviewCard";
import { ReviewInterface } from "../../interfaces/ReviewInterface";
import { CardComponent } from "./CardComponent";
import { useGlobalContext } from "../../contexts/GlobalContext";

function HotelDetails(hotels: HotelInterface) {
  const [reviews, setReviews] = useState<ReviewInterface[]>([]);
  const [isFavorite, setIsFavorite] = useState();
  const [show, setShow] = useState(false);
  const { user, token } = useAuth();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const axiosInstance = createAxiosInstance(token);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { handleToastShow } = useGlobalContext();
  
  const favorite = async () => {
    const response = await axiosInstance.post("/favorites", {
      dateAdded: new Date(),
      userId: user?.userId,
      hotel: hotels,
    });
    handleToastShow(`Hotel was favorited Successfully`, 'success');
  };

  const getReviews = async () => {
    const response = await axiosInstance.get("/reviews/hotel/" + hotels.hotelId);
    setReviews(response.data)
  }
  const unfavorite = async () => {
    const response = await axiosInstance.delete(
      "/favorites/hotel/" + hotels.hotelId + "/user/" + user?.userId
    )
    handleToastShow(`Hotel was unfavorited Successfully`, 'success');
  };

  const bookHotel = async () => {
    const response = await axiosInstance.post("/stays", {
      userId: user?.userId,
      hotel: hotels,
      hotelId: hotels.hotelId,
      bookedDate: checkInDate,
      endDate: checkOutDate
    })
    console.log("check in date" + checkInDate)
    console.log("check out date" + checkOutDate)
    handleToastShow(`Hotel was booked Successfully`, 'success');
  }

  const isFavorited = async() =>{
    const response = await axiosInstance.get(
      "/favorites/hotel/" + hotels.hotelId + "/user/" + user?.userId
    )
    setIsFavorite(response.data)
    console.log(isFavorite)
  }
  const onModalOpen = () => {
    isFavorited()
    getReviews()
  }
  return (
    <>
       <div className="d-flex justify-content-between align-items-center mb-2">
        <Button className="ms-2 p-1" size="sm" variant="primary" onClick={handleShow}>
          More Details
        </Button>
        <div className="d-flex flex-column justify-content-center align-items-center p-1" style={{ height: '2.5rem' }}>
          <span>
            <CardText className="mb-1 text-center" style={{ fontSize: '0.850rem' }}>
              {hotels.rating} Stars
            </CardText>
            <StarRating rating={hotels.rating} />
          </span>
        </div>
      </div>

      <Modal
        onShow={onModalOpen}
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
            <Card.Text>Come Stay with Us! </Card.Text>
            <div className="d-flex justify-content-between">
              <div>Check-In Date</div>
              <input type="datetime-local" name="" id="" onChange={e =>setCheckInDate(e.target.value)} />
            </div>
            <div className="d-flex justify-content-between">
              <div>Check-Out Date</div>
              <input type="datetime-local" name="" id="" onChange={e =>setCheckOutDate(e.target.value)}/>
            </div>
          </Card.Body>
          
        
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {isFavorite ? <Button className="" variant="danger" onClick={unfavorite}>
            Unfavorite
          </Button>:
          <Button className="" variant="primary" onClick={favorite}>
            Favorite
          </Button>}
          <Button variant="primary" onClick={bookHotel}>Book Hotel</Button>
        </Modal.Footer>
        {reviews.map((review, index) => (
          <ReviewCard {...review}></ReviewCard>
        ))}
      </Modal>
      
    </>
  );
}
export default HotelDetails;
