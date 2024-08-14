import React from 'react'
import { Table } from 'react-bootstrap';
import { TicketInterface } from '../../../interfaces/SuppportTicketInterface';


interface SupportTicketTableProps {
    columnNames: string[];
    data: TicketInterface[];
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
                  
                        <td>{ticket.id}</td>
                        <td>{ticket.type}</td>
                        <td>{ticket.userId}</td>
                        <td>{ticket.dateCreated.toLocaleDateString()}</td>
                        <td>{ticket.status}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

    )
}
