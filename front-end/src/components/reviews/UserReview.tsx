import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import StarRating from "../customerHomePage/StarRating"
import { useAuth } from "../../contexts/AuthContext"
import createAxiosInstance from "../../services/AxiosInstance"
import { useEffect, useState } from "react"
import { ReviewInterface } from "../../interfaces/ReviewInterface"
import { BookingInterface } from "../../interfaces/BookingInterface"

interface ReviewDetailsProps {
    reviews: ReviewInterface[]
    bookings: BookingInterface | null
    show: boolean
    onHide: () => void
}

export const UserReviews: React.FC<ReviewDetailsProps> = ({reviews, bookings, show, onHide}) => {
    const {token, user} = useAuth()
    const axiosInstance = createAxiosInstance(token)
    const [userReview, setUserReviewed] = useState<ReviewInterface[]>([])
    const [showModal, setShowModal] = useState(false)


    return(
        <>  
            <div>
                <Button variant="outline-light">
                    <StarRating rating={5} />
                </Button>
            </div>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>User Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                    <Container style={{ marginBottom: '1rem' }}>
                        <Row>
                            <Col>
                                <h5>Rating:</h5>
                            </Col>
                            <Col>
                                <StarRating rating={review.stars}></StarRating>
                            </Col>
                        </Row>
                        <p>{review.reviewText}</p>
                        
                    </Container>
                    ))
                ) : (
                    <p>No reviews available for this hotel.</p>
                )}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}