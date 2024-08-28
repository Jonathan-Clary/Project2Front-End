import { Card } from "react-bootstrap";
import { BookingInterface } from "../interfaces/BookingInterface";
import { useEffect, useState } from "react";

interface BookingCardProps extends BookingInterface{
    onClick: () => void
    className ?: string
  
}

export const BookingCard: React.FC<BookingCardProps> = ({onClick, className, ...booking}) => {
    //{booking.Hotel.hotelName}
    //{booking.bookedDate} 
    const[date, setDate] = useState<string>("")

    useEffect(() => {
      const bookedDate = new Date(booking.bookedDate)
      const bookDateOnly =bookedDate.toDateString()
      setDate(bookDateOnly)
    }, [booking.bookedDate]);


    return (
      
        <Card bg="light" border="dark" className="m-2" onClick={onClick} style={{maxWidth:"250px"}}>
          <Card.Img variant="top" src="/images/HotelPlaceholder.jpg" />
          <Card.Body>
            <Card.Title>{booking.hotel.hotelName}</Card.Title>
            <Card.Text className="">
              {date}
            </Card.Text>
          </Card.Body>
        </Card>
    
    );
  };