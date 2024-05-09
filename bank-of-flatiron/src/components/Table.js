import React from 'react';
import Row from './Row';
// import Button from './Button';

export default function Table({ transaction }) {
    return (
        <>
            <table className='table table-light' >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th> 
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <Row transaction={transaction} />
                </tbody>
            </table>
        </>
    );
}
