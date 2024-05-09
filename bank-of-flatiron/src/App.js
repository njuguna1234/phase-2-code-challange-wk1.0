// App.js

import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import Form from './components/Form';

function App() {
    const arr = [
        
      {
        date: "13/Apr/2014",
        discription: "withDrawn",
        category: "Income",
        amount: "5000$"
    },
    {
        date: "14/March/2015",
        discription:"Bussines",
        category: "Returns",
        amount: "4000$"
    },
    {
        date: "15/Agust/2015",
        discription: "salary",
        category: "Icome",
        amount: "6000$"
    },
    {
        date: "16/oct/2016",
        discription: "laons",
        category: "customer",
        amount: "7000$"
    },
    {
        date: "18/Nov/2017",
        discription: "Cheuq",
        category: "Amaount",
        amount: "8000$"
    },
    {
        date: "19/dec/2019",
        discription: "Employee",
        category: "salary",
        amount: "700000$"
    }
    ];

    const [transaction, setTransaction] = useState(arr);

    const addTransaction = (newTransaction) => {
        setTransaction([...transaction, newTransaction]);
    };

    return (
        <div className="container">
            <Search transaction={transaction} setTransaction={setTransaction} arr={arr} />
            <Form addTransaction={addTransaction} /> 
            <Table transaction={transaction} />
        </div>
    );
}

export default App;
