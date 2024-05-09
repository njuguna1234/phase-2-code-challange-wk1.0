
import React, { useState } from 'react';

export default function Form({ addTransaction }) {
    const [formData, setFormData] = useState({
        date: '',
        description: '',
        category: '',
        amount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.date && formData.description && formData.category && formData.amount) {
            addTransaction(formData);
            setFormData({
                date: '',
                description: '',
                category: '',
                amount: ''
            });
        } else {
            alert('Please fill out all fields!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='m-2 p-3'>
            <input type="text" name="date" value={formData.date} onChange={handleChange} placeholder="Date" />
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
            <input type="text" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" />
            <button className="btn btn-sn btn-primary" type="submit">Add Transaction</button>
        </form>
    );
}
