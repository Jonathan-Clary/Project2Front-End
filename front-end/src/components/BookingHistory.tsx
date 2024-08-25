import {Button, ButtonToolbar, Card, CardHeader, Col, Container, FormControl, FormGroup, InputGroup, Row} from "react-bootstrap"
import { BookingCard } from "./BookingCard"
import { BookingInterface } from "../interfaces/BookingInterface"
import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import createAxiosInstance from "../services/AxiosInstance"


export const BookingHistory: React.FC = () => {
    const{token, user} = useAuth()
    const axiosInstance = createAxiosInstance(token)
    const[bookingHistoryData, setHistoryData] = useState<BookingInterface[]>([])
    const[upcomingBookingData, setUpcomingBooking] = useState<BookingInterface[]>([])
    const[pastBookingData, setPastBooking] = useState<BookingInterface[]>([])
    


    //Getting the current date. Have to add 1 to the month since janurary is 0 
    const current = new Date()
    //Testing the date works
    //const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`

    const filterBookingHistory = (allBookings: BookingInterface[], currentDate: Date) => {
        const upcomingBookings: BookingInterface[] = []
        const pastBookings: BookingInterface[] = []
        allBookings.forEach((booking)=> {
            console.log("booking", booking)
            const bookingstartDate = new Date(booking.bookedDate);

            //Getting rid of the time stamp
            const bookingDateOnly = new Date(bookingstartDate.toDateString())
            const currentDateOnly = new Date(currentDate.toDateString())

            //Filtering
            if(bookingDateOnly>currentDateOnly){
                upcomingBookings.push(booking)
            } else{
                pastBookings.push(booking)
            }
        })
        return {upcomingBookings, pastBookings}
    }

    //Method for getting all booking history and filtering if upcoming or past booking
    const getAllBookingHistory = async () => {
        try{
            const response = await axiosInstance.get(`/stays/user/${user?.userId}`)
            console.log("all bookings" , response)
            setHistoryData(response.data)
            console.log("booking history", response.data)
            const {upcomingBookings, pastBookings} = filterBookingHistory(bookingHistoryData, current)
            
            setUpcomingBooking(upcomingBookings)
            setPastBooking(pastBookings)

            console.log("Upcoming Bookings: ", upcomingBookingData)
            console.log("Past Booking: ", pastBookingData)
          
        } catch(error){
            console.log("error occurred")
        }
    }
    useEffect(() => {
        getAllBookingHistory()
        
    },[])


    return(
        <div style={{background:"blue"}} className="min-vh-100 w-100 p-5">
            <Container className="mt-5 mb-5 p-2" style={{background:"red"}}>
                {/*Add functionality so if no upcoming bookings then display no upcoming bookings */}
                <h3 className="mb-4">Upcoming Booking </h3>
                {upcomingBookingData.length === 0 ? <p>No Upcoming Trips</p> :
                     <BookingCard  className="w-25"></BookingCard>
                }
        
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
                {pastBookingData.length === 0 ? <p> No Past Bookings</p> :
                    <BookingCard className="w-25"></BookingCard>
                }
            </Container>
            
        </div>
    )
}

    