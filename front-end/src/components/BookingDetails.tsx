import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { BookingInterface } from "../interfaces/BookingInterface"
import createAxiosInstance from "../services/AxiosInstance"
import { Card, Col, Container, Form, Modal, Row } from "react-bootstrap"
import { Module } from "module"

interface BookingHistoryCardDetailsProps {
    show: boolean
    onHide: () => void
    booking: BookingInterface | null
}
export const BookingDetails: React.FC<BookingHistoryCardDetailsProps> = ({show, onHide, booking}) => {
    if(!booking) return null

    const formatDate = (date: string) => {
        // Using toISOString to convert date to ISO format, to get rid of the timestamp and day of week 
        const reformattedDate = new Date(date)
        return reformattedDate.toDateString()
    };

    return(
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <Card className="shadow-lg border-dark">
                    <Card.Img variant="top" src="/images/HotelPlaceholder.jpg" ></Card.Img>
                    <Card.Body>
                        <Container>
                            <Form>
                                <Row className="mb-3">
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <Form.Group controlId="hotelName">
                                            <Form.Label>Hotel Name</Form.Label>
                                            <Form.Control type="text" value={booking.hotel.name} readOnly></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <Form.Group controlId="hotelName">
                                            <Form.Label>Hotel Address</Form.Label>
                                            <Form.Control type="text" value={booking.hotel.address} readOnly></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <Form.Group controlId="hotelName">
                                            <Form.Label>Check In Date</Form.Label>
                                            <Form.Control type="text" value={formatDate(booking.bookedDate)} readOnly></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <Form.Group controlId="hotelName">
                                            <Form.Label>Check Out Date</Form.Label>
                                            <Form.Control type="text" value={formatDate(booking.endDate)} readOnly></Form.Control>
                                        </Form.Group>
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