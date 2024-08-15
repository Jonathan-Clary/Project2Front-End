import React from 'react'
import { Table } from 'react-bootstrap';
import { SupportTicketInterface } from '../../../interfaces/support-ticket/SuppportTicketInterface';


interface SupportTicketTableProps {
    columnNames: string[];
    data: SupportTicketInterface[];
}

export const SupportTicketTable: React.FC<SupportTicketTableProps> = ({ columnNames, data }) => {


    return (
        <Table responsive hover striped bordered className="shadow">
            <thead className="table-dark">
                <tr>
                    {columnNames.map((name, index) => (
                        <th key={index}> {name} </th>
                    ))}
                </tr>
            </thead>
            <tbody>

                {data.map((ticket, index) => (
                    <tr key={index}>
                        <td>{ticket.supportTicketId}</td>
                        <td>{ticket.type}</td>
                        <td>{ticket.status}</td>
                        <td>{ticket.description}</td>
                        <td>{ticket.createdAt?.toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

    )
}
