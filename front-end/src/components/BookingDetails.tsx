import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { BookingInterface } from "../interfaces/BookingInterface"
import createAxiosInstance from "../services/AxiosInstance"
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap"
import HotelDetails from "./customerHomePage/HotelDetails"
import ReviewComponent from "./reviews/ReviewComponent"


interface BookingHistoryCardDetailsProps {
    show: boolean
    onHide: () => void
    booking: BookingInterface | null
}
export const BookingDetails: React.FC<BookingHistoryCardDetailsProps> = ({show, onHide, booking}) => {
    
    const [isFavorite, setIsFavorite] = useState();
    const {token, user} = useAuth()
    const axiosInstance = createAxiosInstance(token)

    if(!booking) return null

    const formatDate = (date: string) => {
        // Using toISOString to convert date to ISO format, to get rid of the timestamp and day of week 
        const reformattedDate = new Date(date)
        return reformattedDate.toDateString()
    };

    const favoriteHotel = async () => {
        try{
            console.log(booking.hotelId)
                const response = await axiosInstance.post(
                    "/favorites",
                    {
                        dateAdded : new Date(),
                        userId : user?.userId,
                        hotel: booking.hotel
                    }
        
                );
        } catch (error) {
            console.log("error", error)
        }
    }
    const isFavorited = async() =>{
        const response = await axiosInstance.get(
          "/favorites/hotel/" + booking.hotel.hotelId + "/user/" + user?.userId
        )
        setIsFavorite(response.data)
        console.log(isFavorite)
      }
    
      const unfavorite = async () => {
        const response = await axiosInstance.delete(
          "/favorites/hotel/" + booking.hotel.hotelId + "/user/" + user?.userId
        )
      };

    
    return(
        <Modal show={show} onHide={onHide} onShow={isFavorited}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <Card className="shadow-lg border-dark" style={{maxWidth:"500px"}}>
                    <Card.Img variant="top" src={booking.hotel.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></Card.Img>
                    <Card.Body>
                        <Container>
                            <Form>
                                <Row className="mb-3">
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <Form.Group controlId="hotelName">
                                            <Form.Label>Hotel Name</Form.Label>
                                            <Form.Control type="text" value={booking.hotel.name} readOnly></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <Form.Group controlId="hotelName">
                                            <Form.Label>Hotel Address</Form.Label>
                                            <Form.Control type="text" value={booking.hotel.address} readOnly></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        <Form.Group controlId="hotelName">
                                            <Form.Label>Check In Date</Form.Label>
                                            <Form.Control type="text" value={formatDate(booking.bookedDate)} readOnly></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        <Form.Group controlId="hotelName">
                                            <Form.Label>Check Out Date</Form.Label>
                                            <Form.Control type="text" value={formatDate(booking.endDate)} readOnly></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="d-flex justify-content-center align-items-center">
                                    <Col xs="auto">
                                        {isFavorite ? <Button className="" variant="outline-danger" onClick={unfavorite}>
                                                Unfavorite
                                            </Button>:
                                            <Button className="" variant="outline-dark" onClick={favoriteHotel} style={{fontSize:"18px"}}> <i className="bi bi-heart me-2"></i>
                                                Favorite
                                            </Button>}
                                            
                                    </Col>
                                    <Col xs="auto">
                                    <ReviewComponent {...booking.hotel}></ReviewComponent>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </Card.Body>

                </Card>
            </Modal.Body>
        </Modal>
    )
}