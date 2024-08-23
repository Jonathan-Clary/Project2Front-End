import React, { useEffect, useState } from 'react'
import { SupportTicketTable } from '../support-ticket-table/SupportTicketTable'
import { SupportTicketInterface } from '../../../interfaces/support-ticket/SuppportTicketInterface';
import { Button, ButtonGroup, ButtonToolbar, Card, CardBody, Container, Dropdown, DropdownButton, Form, InputGroup, Nav, Pagination } from 'react-bootstrap';
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
        supportTicketId: 2,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.TECHNICAL_ISSUES,
        description: "TECHNICAL_ISSUES PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 3,
        // User HERE
        status: TicketStatusEnum.RESOLVED,
        type: TicketTypeEnum.GENERAL,
        description: "GENERAL PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 4,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.PRIVACY,
        description: "PRIVACY PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 5,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.FEEDBACK,
        description: "FEEDBACK PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 6,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.TECHNICAL_ISSUES,
        description: "GENERAL PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 7,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.TECHNICAL_ISSUES,
        description: "TECHNICAL_ISSUES PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 8,
        // User HERE
        status: TicketStatusEnum.RESOLVED,
        type: TicketTypeEnum.INFORMATION,
        description: "INFORMATION PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 9,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.PRIVACY,
        description: "PRIVACY PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 10,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.FEEDBACK,
        description: "FEEDBACK PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 11,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.TECHNICAL_ISSUES,
        description: "GENERAL PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 12,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.INFORMATION,
        description: "INFORMATION PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 13,
        // User HERE
        status: TicketStatusEnum.PENDING,
        type: TicketTypeEnum.GENERAL,
        description: "GENERAL PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 14,
        // User HERE
        status: TicketStatusEnum.RESOLVED,
        type: TicketTypeEnum.PRIVACY,
        description: "PRIVACY PROBLEM DESCRIPTION",
        createdAt: new Date('2023-08-01T10:00:00Z')
    },
    {
        supportTicketId: 15,
        // User HERE
        status: TicketStatusEnum.RESOLVED,
        type: TicketTypeEnum.FEEDBACK,
        description: "FEEDBACK PROBLEM DESCRIPTION",
        createdAt: new Date()
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
    const [typeFilter, setTypeFilter] = useState('Type');
    const [typeFilterBtnTitle, setTypeFilterBtnTitle] = useState('Type');
    const [statusTab, setStatusTab] = useState('Pending');
   
    const [searchTerm, setSearchTerm] = useState<string>(''); // search box input state. 
    const [reset, setReset] = useState(false);

    const handleTabsAndFilters = () => {
        setTypeFilterBtnTitle(typeFilter);
        let filtered = mockData;

        if (typeFilter != 'Type') {
            if (typeFilter.toUpperCase() in TicketTypeEnum) {
                filtered = filtered.filter(data => 
                    data.type === TicketTypeEnum[typeFilter.toUpperCase() as keyof typeof TicketTypeEnum]
                );
            }
        }

        if (statusTab) {
            filtered = filtered.filter(data => data.status.toUpperCase() === statusTab.toUpperCase());
        }

        if (searchTerm) {
            filtered = filtered.filter(data => data.description.toUpperCase().includes(searchTerm.toUpperCase().trim()) || data.supportTicketId?.toFixed().startsWith(searchTerm.trim()) );
        }

        setFilterData(filtered);
    }

    // RESET FILTERS
    const handleResetFilters = () => {
        setTypeFilter('Type');
        setSearchTerm('');
        setReset(true);
        setTimeout(() => setReset(false), 100);
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }
    


    useEffect(() => {
        handleTabsAndFilters();
    }, [typeFilter, statusTab, searchTerm])

    return (
        <Container>
            <Card className='mt-5 shadow'>
                <Card.Header>
                    <Nav justify variant="tabs" defaultActiveKey="#pending-tickets">
                        <Nav.Item >
                            <Nav.Link href="#pending-tickets" onClick={() => setStatusTab('Pending')}>Pending</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#resolved-tickets" onClick={() => setStatusTab('Resolved')}>Resolved</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Card.Header>

                <Card.Body>
                    <Card.Title className='text-center m-4'>Support Tickets</Card.Title>
                    <Card className='card text-center'>

                        <Card.Header>
                            <ButtonToolbar aria-label="Toolbar with Button groups" className='d-flex justify-content-between'>
                                <InputGroup>
                                    <InputGroup.Text id="btnGroupAddon"><i className="bi bi-search"></i></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="search.."
                                        onChange={handleSearch}
                                        value={searchTerm}
                                    />
                                </InputGroup>
                                <ButtonGroup className="me-2" aria-label="First group">
                                    <DropdownButton as={ButtonGroup} title={typeFilterBtnTitle} id="bg-nested-dropdown">
                                        <Dropdown.Item onClick={() => setTypeFilter('General')}>General</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setTypeFilter('Technical_Issues')}>Technical Issue</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setTypeFilter('Information')}>Information</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setTypeFilter('Feedback')}>Feedback</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setTypeFilter('Privacy')}>Privacy</Dropdown.Item>
                                    </DropdownButton>
                                    <Button variant='secondary' onClick={() => handleResetFilters()}><i className="bi bi-arrow-clockwise"></i></Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Card.Header>

                        <Card.Body>
                            <SupportTicketTable data={filterData} reset={reset}/>
                            {/* PAGINATION */}
                            <Pagination className="justify-content-end">
                                <Pagination.Prev>Previous</Pagination.Prev>

                                <Pagination.Next>Next</Pagination.Next>
                            </Pagination>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </Container>
    );
}
