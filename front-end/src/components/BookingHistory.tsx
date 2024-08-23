import {Card, CardHeader, Container} from "react-bootstrap"


export const BookingHistory: React.FC = () => {



    return(
        <div style={{background:"blue"}}>
            <Container className="mt-5">
                <Card className="mb-4">
                    <CardHeader className="text-left">Upcoming Bookings</CardHeader>

                </Card>
            </Container>
            <Container>
            <Card className="mb-4">
                    <CardHeader className="text-left">Past Bookings</CardHeader>

                </Card>

            </Container>
            
        </div>
    )
}

    