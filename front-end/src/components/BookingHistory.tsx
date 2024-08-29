import {Button, ButtonToolbar, Card, CardHeader, Col, Container, FormControl, FormGroup, InputGroup, Row} from "react-bootstrap"
import { BookingCard } from "./BookingCard"
import { BookingInterface } from "../interfaces/BookingInterface"
import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import createAxiosInstance from "../services/AxiosInstance"
import InputGroupText from "react-bootstrap/esm/InputGroupText"
import { BookingDetails } from "./BookingDetails"

/*  TODO:
        - PAGINATION for cards
        - Able to click card and see booking information
*/

export const BookingHistory: React.FC = () => {
    const{token, user} = useAuth()
    const axiosInstance = createAxiosInstance(token)
    const [bookingHistory, setBookingHistory] = useState<BookingInterface[]>([])
    const[upcomingBookingData, setUpcomingBooking] = useState<BookingInterface[]>([])
    const[pastBookingData, setPastBooking] = useState<BookingInterface[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [filtered, setFiltered] = useState<BookingInterface[]>([])
    const [searchDate, setSearchDate] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)
    const [selectedBooking, setSelectedBooking] = useState<BookingInterface | null>(null)

    //Getting the current date. Have to add 1 to the month since janurary is 0 
    const current = new Date()
    //Testing the date works
    //const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`

    //Method for filtering the incoming bookings into past and upcoming
    const filterBookingHistory = (allBookings: BookingInterface[], currentDate: Date) => {
        const upcomingBookings: BookingInterface[] = []
        const pastBookings: BookingInterface[] = []
        allBookings.forEach((booking)=> {
            const bookingStartDate = new Date(booking.bookedDate)
            const bookingDateOnly = bookingStartDate.toDateString()
            const currentDateOnly = current.toDateString()
            //Filtering
            if(bookingDateOnly>=currentDateOnly){
                upcomingBookings.push(booking)
                console.log("added to upcoming")
            } else{
                pastBookings.push(booking)
                console.log("added to past")
                console.log(pastBookings)
            }
        })
        return {upcomingBookings, pastBookings}
    }
 
    //Method for getting all booking history and filtering if upcoming or past booking
    const getAllBookingHistory = async () => {
        try{
            const response = await axiosInstance.get("/stays/user/" + user?.userId)
            console.log("res", response)
            setBookingHistory(response.data)    
            console.log("booking history", bookingHistory)        
            const {upcomingBookings, pastBookings} = filterBookingHistory(response.data, current)
            setUpcomingBooking(upcomingBookings)
            setPastBooking(pastBookings)

            console.log("Upcoming Bookings: ", upcomingBookings)
            console.log("Past Booking: ", pastBookings)
        } catch(error){
            console.log("error occurred")
            console.log(error)
        }
    }

    //Used to set the Searched Hotel Name
    const searchBookings = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
        console.log("Search Term: ", searchTerm)
    }

    //Used to set the indicated search date
    const searchBookingDate = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearchDate(e.target.value)
        console.log("Search Date: ", searchDate)
    }

    //Used to format the date
    const formatDate = (date: Date): string => {
        // Using toISOString to convert date to ISO format, to get rid of the timestamp and day of week 
        return date.toISOString().split('T')[0]
    };
    
    //handle sorting based on hotel name and day
    const handleBookingFilters = () => {
        let filtered = pastBookingData

        if(searchTerm){
            filtered = filtered.filter((booking)=> booking.hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }
        if(searchDate) {
            // Convert searchDate to a Date object for comparison
            const SearchDate = new Date(searchDate);
            const formattedSearch = formatDate(SearchDate)
            filtered = filtered.filter((booking) => {
                const bookingDate = new Date(booking.bookedDate);
                console.log(booking.bookedDate)
                const formattedBookDate = formatDate(bookingDate) 
                console.log("fmsearch",formattedSearch)
                console.log("fmBD", formattedBookDate)
                // Compare booking date with the search date
                return formattedSearch === formattedBookDate
            });
        }

        setFiltered(filtered)
    }

    //The reset button
    const handleReset = () => {
        setSearchTerm('')
        setSearchDate('')
    }

    //Used to handle a card click to show Booking details
    const handleCardClick = (booking: BookingInterface) => {
        setSelectedBooking(booking)
        setShowModal(true)
        console.log("Made it the card click")
    }


    useEffect(() => {
        getAllBookingHistory() 
    }, [])

    useEffect(()=>{
        handleBookingFilters();
    }, [searchDate, searchTerm, bookingHistory])

    useEffect(()=>{
        getAllBookingHistory()
        handleBookingFilters()
    },[])


    return(
        <div style={{background:"white"}} className="min-vh-100 w-100 p-5">
            <Container className="shadow mt-5 mb-5 p-2" style={{background:"white"}}>
                {/*Add functionality so if no upcoming bookings then display no upcoming bookings */}
                <h3 className="mb-4">Upcoming Booking </h3>
                {upcomingBookingData.length === 0 ? <p>No Upcoming Trips</p> :
                     <div>{upcomingBookingData.map((stays) => (
                        <BookingCard {...stays} className="w-25" onClick= {()=>handleCardClick(stays)}></BookingCard>
                        ))}</div>    
                }
                
            </Container>
            <Container className="shadow mt-5 mb-5 p-2" style={{background:"white"}}>
                <h3 className="mb-5">Past Booking</h3>
                 {/*Search bar for past bookings */}
                <ButtonToolbar aria-label="Button toolbar" className="d-flex justify-content-between w-100" >
                    <InputGroup className="mb-3 w-100" style={{backgroundColor:"#f5f5f5"}}>
                        <InputGroup.Text id="Button-Search"><i className="bi bi-search"></i></InputGroup.Text>
                        <FormControl
                            className="w-25"
                            type="text"
                            placeholder="Search past bookings"
                            onChange={searchBookings}
                            value={searchTerm}
                        ></FormControl>
                        <FormControl
                            className="ms-5 w-25"
                            type="date"
                            placeholder="Filter by start date"
                            onChange ={searchBookingDate}
                            value={searchDate}
                        ></FormControl>
                        <Button  className ="ms-5"variant ='secondary' onClick={()=>handleReset()}> <i className="bi bi-arrow-clockwise"></i></Button>
                    </InputGroup>
                    
                </ButtonToolbar>
                {pastBookingData.length === 0 ? <p> No Past Bookings</p> :
                    <Row>{filtered.map((stays) => (
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <BookingCard {...stays} className="w-25" onClick={()=>handleCardClick(stays)}></BookingCard>
                        </Col>
                        ))}
                    </Row>
                }
                
            </Container>

            <BookingDetails
                show={showModal}
                onHide={()=>setShowModal(false)}
                booking={selectedBooking}
            />
        </div>
    )
}

    