import React, { useEffect, useState } from 'react';
import BookingCard from '../../Components/BookingCard/BookingCard';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div className='d-flex flex-row p-3' align="center">
            {
                packages.map(p => <BookingCard
                key={p.id}
                roomDetails={p}
                ></BookingCard>)
            }
        </div>
    );
};

export default Packages;