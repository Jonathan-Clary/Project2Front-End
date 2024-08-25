import {Button, ButtonToolbar, Card, CardHeader, Col, Container, FormControl, FormGroup, InputGroup, Row} from "react-bootstrap"
import { BookingCard } from "./BookingCard"
import { BookingInterface } from "../interfaces/BookingInterface"
import { useState } from "react"



export const BookingHistory: React.FC = () => {

    const[bookingHistoryData, setHistoryData] = useState<BookingInterface[]>([])

   

    const getAllBookingHistory = async () => {
        
    }



    return(
        <div style={{background:"blue"}} className="min-vh-100 w-100 p-5">
            <Container className="mt-5 mb-5 p-2" style={{background:"red"}}>
                {/*Add functionality so if no upcoming bookings then display no upcoming bookings */}
                <h3 className="mb-4">Upcoming Booking </h3>
                
                <BookingCard  className="w-25"></BookingCard>
                
            </Container>
            <Container className="mt-5 mb-5 p-2" style={{background:"red"}}>
                <h3 className="mb-5">Past Booking</h3>
                {/*Search bar for past bookings */}
                <ButtonToolbar aria-label="Button toolbar" className="d-flex justify-content-between w-100" >
                    <InputGroup className="mb-3 w-100" style={{backgroundColor:"gray"}}>
                        <InputGroup.Text id="Button-Search"><i className="bi bi-search"></i></InputGroup.Text>
                        <FormControl
                            className="w-25"
                            type="text"
                            placeholder="Search past bookings"
                        ></FormControl>
                        <FormControl
                            className="ms-5 w-25"
                            type="date"
                            placeholder="Filter by start date"
                        ></FormControl>
                        <Button  className ="ms-5"variant ='secondary'> <i className="bi bi-arrow-clockwise"></i></Button>
                    </InputGroup>
                    
                </ButtonToolbar>
                <BookingCard className="w-25"></BookingCard>
            </Container>
            
        </div>
    )
}

    