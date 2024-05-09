import React from 'react';
// import { useState } from 'react'; 

export default function Search({ transaction, setTransaction, arr }) {
    function handleChange(event) {
        const hint = event.target.value;

        if (hint.length > 0) {
            const filter = transaction.filter((transaction) => {
                return transaction.discription.toLowerCase().includes(hint.toLowerCase());
            });
            setTransaction([...filter]);
        } else {
            setTransaction([...arr]); 
        }
    }

    return (
        <div className='m-2'>
            <input onChange={handleChange} className="form-control form-control-sm" type="text" placeholder="type" />
        </div>
    );
}
