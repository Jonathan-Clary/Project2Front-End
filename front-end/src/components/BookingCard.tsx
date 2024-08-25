import { Card } from "react-bootstrap";
import { BookingInterface } from "../interfaces/BookingInterface";


export const BookingCard: React.FC<any> = (booking: BookingInterface) => {
    //{booking.Hotel.hotelName}
    //{booking.bookedDate} 

    return (
      <div className="m-3 shadow " style={{ maxWidth: 250 }}>
        
        <Card bg="light" border="dark">
          <Card.Img variant="top" src="/images/HotelPlaceholder.jpg" />
          <Card.Body>
            <Card.Title>Hotel Name</Card.Title>
            <Card.Text className="">
              Start date
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };