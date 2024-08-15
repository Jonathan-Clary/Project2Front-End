import React, { useEffect, useState } from 'react'
import { SupportTicketTable } from '../support-ticket-table/SupportTicketTable'
import { SupportTicketInterface } from '../../../interfaces/support-ticket/SuppportTicketInterface';
import { Card, Container, Nav, Pagination } from 'react-bootstrap';
import { TicketStatusEnum } from '../../../enums/support-tickets/TicketStatusEnum';
import { TicketTypeEnum } from '../../../enums/support-tickets/TicketTypeEnum';
import './SuppportTicket.css';

// TEMP DATA
const mockData: SupportTicketInterface[] = [
    {
        supportTicketId: 1,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.TECHNICAL_ISSUES,
        description: "GENERAL PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 5,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.TECHNICAL_ISSUES,
        description: "TECHNICAL_ISSUES PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 4,
        // User HERE
        status: TicketStatusEnum.RESOLVED,
        type: TicketTypeEnum.GENERAL,
        description: "GENERAL PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 3,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.PRIVACY,
        description: "PRIVACY PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 2,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.FEEDBACK,
        description: "FEEDBACK PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 1,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.TECHNICAL_ISSUES,
        description: "GENERAL PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 5,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.TECHNICAL_ISSUES,
        description: "TECHNICAL_ISSUES PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 4,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.INFORMATION,
        description: "INFORMATION PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 3,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.PRIVACY,
        description: "PRIVACY PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 2,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.FEEDBACK,
        description: "FEEDBACK PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 1,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.TECHNICAL_ISSUES,
        description: "GENERAL PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 5,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.TECHNICAL_ISSUES,
        description: "TECHNICAL_ISSUES PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 4,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.GENERAL,
        description: "GENERAL PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 3,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.PRIVACY,
        description: "PRIVACY PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 2,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.FEEDBACK,
        description: "FEEDBACK PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
];

/* 
    TODO: 
        1. RESOLVED TICKETS SHOULD GO IN HISTORY TABLE OF SOME KIND 
        2. FILTER BY TICKET TYPE (INFORMATION, PRIVACY, FEEDBACK, TECHNICAL_ISSUES, GENERAL )
        3. SET UP PAGINATION
        4. 

*/


export const SupportTickets: React.FC = () => {
    const [filterData, setFilterData] = useState(mockData);
    const [typeFilter, setTypeFilter] = useState('General');


    const handleTabFilters = () => {
        let filtered;
        switch (typeFilter) {
            case 'General':
                filtered = mockData.filter(mockData => mockData.type == TicketTypeEnum.GENERAL && mockData.status == 'PENDING');

                break;
            case 'Technical_Issues':
                filtered = mockData.filter(mockData => mockData.type == TicketTypeEnum.TECHNICAL_ISSUES && mockData.status == 'PENDING');
                break;
            case 'Information':
                filtered = mockData.filter(mockData => mockData.type == TicketTypeEnum.INFORMATION && mockData.status == 'PENDING');
                break;
            case 'Feedback':
                filtered = mockData.filter(mockData => mockData.type == TicketTypeEnum.FEEDBACK && mockData.status == 'PENDING');
                break;
            case 'Privacy':
                filtered = mockData.filter(mockData => mockData.type == TicketTypeEnum.PRIVACY && mockData.status == 'PENDING');
                break;
            default:
                filtered = mockData;
        }
        setFilterData(filtered);
    }

    useEffect(() => {
        handleTabFilters();
    }, [typeFilter])

    return (
        <Container>
            <Card className='mt-5'>
                <Card.Header>
                    <Nav justify variant="tabs" defaultActiveKey="#General">
                        <Nav.Item onClick={() => setTypeFilter('General')}>
                            <Nav.Link href="#General">General</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => setTypeFilter('Technical_Issues')}>
                            <Nav.Link href="#Technical_Issues">Technical Issues</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => setTypeFilter('Information')}>
                            <Nav.Link href="#Information">Information</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => setTypeFilter('Feedback')}>
                            <Nav.Link href="#Feedback">Feedback</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => setTypeFilter('Privacy')}>
                            <Nav.Link href="#Privacy">Privacy</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Support Tickets</Card.Title>
                    <SupportTicketTable columnNames={["ID", "Type", "Status", "Description", "Creation Date"]} data={filterData} />

                    {/* PAGINATION */}

                    <Pagination className="justify-content-end">
                        <Pagination.Prev>Previous</Pagination.Prev>
                       
                        <Pagination.Next>Next</Pagination.Next>
                    </Pagination>
                </Card.Body>
            </Card>


        </Container>

    )
}
