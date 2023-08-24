import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, email, phone, website} = friend;
    return (
      <div className="single-friend">
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{phone}</h2>
        <h2>{website}</h2>
        <p><Link to={`/friend/${id}`}> Show me details </Link> </p>
      </div>
    );
};

export default Friend;