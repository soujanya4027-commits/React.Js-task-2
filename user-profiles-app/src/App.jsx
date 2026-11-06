import React from 'react';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  // 1. Created a minimum of 5 different user data sets
  const users = [
    {
      id: 1,
      name: "Soujanya",
      city: "Bengaluru",
      age: 25,
      email: "soujanya@thestackly.com",
      phone: "+91 98765 43210"
    },
    {
      id: 2,
      name: "srishti",
      city: "Mumbai",
      age: 24,
      email: "srishti@thestackly.com",
      phone: "+91 91234 56789"
    },
    {
      id: 3,
      name: "Rohan Verma",
      city: "Delhi",
      age: 26,
      email: "rohan.verma@example.com",
      phone: "+91 99887 76655"
    },
    {
      id: 4,
      name: "Ananya Iyer",
      city: "Chennai",
      age: 23,
      email: "ananya.iyer@example.com",
      phone: "+91 94455 66778"
    },
    {
      id: 5,
      name: "Kiran Rao",
      city: "Hyderabad",
      age: 25,
      email: "kiran.rao@example.com",
      phone: "+91 91122 33445"
    }
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>User Profiles Dashboard</h1>
        <p>Profiles Details are mentioned in below</p>
      </header>

      {/* 2. Rendering the Child Component 5 times dynamically using .map() */}
      <div className="card-grid">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            city={user.city}
            age={user.age}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </div>
    </div>
  );
}

export default App;