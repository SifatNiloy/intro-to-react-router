import React from 'react';
import './Friend.css';

const Friend = ({friend}) => {
    const {name, email, phone, website} = friend;
    return (
        <div className='single-friend'>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <h2>{website}</h2>
        </div>
    );
};

export default Friend;