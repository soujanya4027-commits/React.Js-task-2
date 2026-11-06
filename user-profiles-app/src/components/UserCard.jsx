import React from 'react';
import './UserCard.css'; // Optional: for styling individual cards

function UserCard({ name, city, age, email, phone }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}

export default UserCard;