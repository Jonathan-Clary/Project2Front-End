import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { BookingInterface } from "../interfaces/BookingInterface"
import createAxiosInstance from "../services/AxiosInstance"
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap"
import ReviewComponent from "./reviews/ReviewComponent"
import { ReviewInterface } from "../interfaces/ReviewInterface"
import { UserReviews } from "./reviews/UserReview"
import StarRating from "./customerHomePage/StarRating"


interface BookingHistoryCardDetailsProps {
    show: boolean
    onHide: () => void
    booking: BookingInterface | null
}
export const BookingDetails: React.FC<BookingHistoryCardDetailsProps> = ({show, onHide, booking}) => {
    
    const [isFavorite, setIsFavorite] = useState();
    const {token, user} = useAuth()
    const axiosInstance = createAxiosInstance(token)
    const [isReviewed, setReviewed] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [userReview, setUserReviewed] = useState<ReviewInterface[]>([])

    if(!booking) return null

    const formatDate = (date: string) => {
        // Using toISOString to convert date to ISO format, to get rid of the timestamp and day of week 
        const reformattedDate = new Date(date)
        return reformattedDate.toDateString()
    };

    //Favorites a hotel
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

    //Returns if the hotel is favorited or not
    const isFavorited = async() =>{
        const response = await axiosInstance.get(
          "/favorites/hotel/" + booking.hotel.hotelId + "/user/" + user?.userId
        )
       
        setIsFavorite(response.data)
        console.log(isFavorite)
      }
    
    //Unfavorites a hotel
    const unfavorite = async () => {
    const response = await axiosInstance.delete(
        "/favorites/hotel/" + booking.hotel.hotelId + "/user/" + user?.userId
    )
    };
    
    //Gets a review for a hotel that the user wrote
    const isReview = async () => {
        try{
            const response = await axiosInstance.get("/reviews/hotel/" + booking.hotel.hotelId + "/user/" + user?.userId)
            setReviewed(response.data)
            console.log("the response", response.data)
        } catch (error){
            console.log("error", error)
        }

    }

    const getReview = async() => {
        try{
            const response = await axiosInstance.get("/reviews/user/" + user?.userId + "/hotel/" + booking.hotel.hotelId)
            setUserReviewed(response.data)
            console.log("user", response.data)
            setShowModal(true)
        } catch (error) {
            console.log("error", error)
        }
    }

    const handleisFavoritedandisReview = async () =>{
        await isFavorited()
        await isReview()
    }
    
    return(
        <>
        <Modal show={show} onHide={onHide} onShow={handleisFavoritedandisReview}>
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
                                    <Col xs="auto">
                                        {isReviewed ? 
                                     
                                            <Button
                                                variant="outline-dark"
                                                onClick={() => getReview()}
                                                >
                                                Reviews
                                            </Button> : <></>
                                
                                        }
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </Card.Body>

                </Card>
            </Modal.Body>

        </Modal>

        <UserReviews
            reviews ={userReview}
            bookings={booking}
            show={showModal}
            onHide={()=>setShowModal(false)}
            
        />
        </>
    )
}