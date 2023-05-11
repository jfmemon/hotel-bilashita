import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaBed, FaUserFriends, FaDollarSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BookingCard = ({roomDetails}) => {
    const {id, name, bed, capacity, price} = roomDetails;

    const navigate = useNavigate();

    const handleBooking = (roomId) => {
        navigate(`/packages/${roomId}`);
    }

    return (
        <div className='m-3' align="center">
            <Card>
                <Card.Body align="center">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam quidem in ad totam voluptate, ullam illum error. Porro, quae.
                    </Card.Text>
                    <div className="d-flex flex-row justify-content-center">
                        <p className='px-3'><FaBed className='me-1' />{bed}</p>
                        <p className='px-3'><FaUserFriends className='me-1' />{capacity}</p>
                        <p className='px-3'><FaDollarSign className='me-1' />{price}</p>
                    </div>
                    <Button onClick={() => handleBooking(id)} variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookingCard;