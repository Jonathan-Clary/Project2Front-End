import React from 'react'
import { SupportTicketTable } from '../support-ticket-table/SupportTicketTable'
import { TicketInterface } from '../../../interfaces/SuppportTicketInterface';
import { Container } from 'react-bootstrap';

const mockData: TicketInterface[] = [
    {
        id: '001',
        type: 'Booking Support',
        userId: 'user123',
        dateCreated: new Date('2023-08-01T10:00:00Z'),
        status: 'Open'
    },
    {
        id: '002',
        type: 'Account Support',
        userId: 'user456',
        dateCreated: new Date('2023-08-05T14:30:00Z'),
        status: 'In Progress'
    },
    {
        id: '003',
        type: 'Booking Support',
        userId: 'user789',
        dateCreated: new Date('2023-08-10T09:15:00Z'),
        status: 'Resolved'
    },
    {
        id: '004',
        type: 'Account Support',
        userId: 'user012',
        dateCreated: new Date('2023-08-12T12:45:00Z'),
        status: 'Open'
    },
    {
        id: '005',
        type: 'Account Support',
        userId: 'user345',
        dateCreated: new Date('2023-08-13T16:20:00Z'),
        status: 'Resolved'
    }
];


export const SupportTickets: React.FC = () => {
    const filteredData =  mockData.filter(mockData => mockData.type != 'Booking Support');
    

    return (
        <>
        <SupportTicketTable columnNames={["ID", "Type", "User ID", "Date Created", "Status"]} data={filteredData}/>
            
        </>

    )
}
