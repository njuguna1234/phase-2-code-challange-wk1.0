
import React from 'react';

export default function Button(props) {
    function handleclick(value) {
        console.log(value);
    }

    return (
        <button onClick={() => handleclick(props.value)} className="btn btn-sn btn-danger">{props.value}</button>
    );
}
