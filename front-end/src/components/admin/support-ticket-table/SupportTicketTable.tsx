import React, { useEffect, useMemo, useState } from 'react'
import { Table } from 'react-bootstrap';
import { SupportTicketInterface } from '../../../interfaces/support-ticket/SuppportTicketInterface';


interface SupportTicketTableProps {
    data: SupportTicketInterface[];
    reset?: boolean;
}

export const SupportTicketTable: React.FC<SupportTicketTableProps> = ({ data, reset }) => {
    const [sortData, setSortData] = useState<{ key: 'supportTicketId' | 'createdAt', direction: 'ascending' | 'descending' } | null>(null);

    //useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
    //https://react.dev/reference/react/useMemo
    const sortedData = useMemo(() => {
        let sortableData = [...data];
        if (sortData !== null) {
            sortableData.sort((a, b) => {
                const aValue = sortData.key === 'createdAt' ? a[sortData.key]?.getTime() : a[sortData.key];
                const bValue = sortData.key === 'createdAt' ? b[sortData.key]?.getTime() : b[sortData.key];
                const aSortValue = aValue ?? (sortData.key === 'createdAt' ? 0 : '');
                const bSortValue = bValue ?? (sortData.key === 'createdAt' ? 0 : '');

                if (aSortValue < bSortValue) {
                    return sortData.direction === 'ascending' ? -1 : 1;
                }
                if (aSortValue > bSortValue) {
                    return sortData.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData;
    }, [data, sortData]);


    const requestSort = (key: 'supportTicketId' | 'createdAt') => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortData && sortData.key === key && sortData.direction === 'ascending') {
            direction = 'descending';
        }
        setSortData({ key, direction });
    };

    useEffect(() => {
        if (reset) {
            setSortData(null);
        }
    }, [reset])


    return (
        <Table responsive hover striped bordered className="shadow">
            <thead className="table-dark">
                <tr>
                <th onClick={() => requestSort('supportTicketId')}>
                        ID {sortData?.key === 'supportTicketId' ? (
                            sortData.direction === 'ascending' ?
                            <i className="bi bi-sort-up"></i> : 
                            <i className="bi bi-sort-down"></i>
                        ) : (
                            <i className="bi bi-filter"></i>
                        )}
                        </th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th onClick={() => requestSort('createdAt')}>
                        Creation Date {sortData?.key === 'createdAt' ? (
                            sortData.direction === 'ascending' ? 
                            <i className="bi bi-sort-up"></i> : 
                            <i className="bi bi-sort-down"></i>
                        ) : (
                            <i className="bi bi-filter"></i>
                        )}
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0 &&
                    <tr>
                        <td colSpan={7} className="text-center">
                            <p className="m-0">No support tickets found</p>
                        </td>
                    </tr>
                }
                {sortedData.map((ticket, index) => (
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
