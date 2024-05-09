import React from 'react';
import Button from './Button';

export default function Row({ transaction }) {
    const rows = transaction.map((transaction, index) => {
        return (
            <tr key={index + 1} >
                <td>{transaction.date}</td>
                <td>{transaction.discription}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>
                    <Button value="Delete" />
                </td>
            </tr>
        );
    });

    return (
        <>{rows}</>
    );
}
