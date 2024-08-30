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
      <div className="m-3" style={{maxWidth:275, height:325}}>
          <Card bg="light" border="dark" className="m-2 h-100" onClick={onClick} >
            <div className="h-50">
              <Card.Img variant="top" src={booking.hotel.image} style={{height: '175px', objectFit: 'cover'}} />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between ">
              <Card.Title className="mt-2">{booking.hotel.name}</Card.Title>
              <Card.Text className="">
                {date}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    
    );
  };