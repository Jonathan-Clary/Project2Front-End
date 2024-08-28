import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import "./ReviewSupportTickets.css"; 

// Define the shape of a support ticket based on your model
interface SupportTicket {
    supportTicketId: string;
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    description: string;
    status: string;
    type: string;
    createdAt: string;
}

export const ReviewSupportTickets: React.FC = () => {

    const [tickets, setTickets] = useState<SupportTicket[]>([]);
    const { user, token } = useAuth();  // Access user and token from context

    useEffect(() => {
        if (user && token) {
            // Fetch support tickets for the specific user
            axios.get(`http://localhost:8080/support/get/all/${user.userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,  // Include token in the request headers
                },
            })
            .then(response => {
                setTickets(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the support tickets!", error);
            });
        }
    }, [user, token]);

    return(
<div className="min-vh-100 w-100 p-5" style={{ backgroundColor: "#f7f9fc" }}>
    <Container>
        <h5 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#495057' }}>My Support Tickets</h5>
        <Table className="table-modern" responsive>
            <thead style={{ backgroundColor: "#007bff", color: "white" }}>
                <tr>
                    <th>#</th>
                    <th>Ticket ID</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {tickets.map((ticket, index) => (
                    <tr key={ticket.supportTicketId} className="table-row-hover">
                        <td>{index + 1}</td>
                        <td>{ticket.supportTicketId}</td>
                        <td>{ticket.description}</td>
                        <td>{ticket.status}</td>
                        <td>{ticket.type}</td>
                        <td>{new Date(ticket.createdAt).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Container>
</div>

    )
}