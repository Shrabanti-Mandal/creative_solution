import React from 'react';
import Navbar from '../Navbar/Navbar';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-danger mt-4">error 404!</h1>
        </div>
    );
};

export default Error;