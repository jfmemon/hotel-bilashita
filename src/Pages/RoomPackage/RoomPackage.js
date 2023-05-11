import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RoomPackage = () => {
    const room = useLoaderData();
    console.log(room);
    return (
        <div>
            <h3>This is page.</h3>
        </div>
    );
};

export default RoomPackage;