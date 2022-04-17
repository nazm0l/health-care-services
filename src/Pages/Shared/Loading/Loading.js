import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className=' container text-center mt-5 p-5'>
            <Spinner animation="border" variant="dark" />
        </div>
    );
};

export default Loading;