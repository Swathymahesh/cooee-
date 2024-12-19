// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Add styles here
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [users, setUsers] = useState([]); 
    const [filter, setFilter] = useState(''); 
    const [sortKey, setSortKey] = useState(''); 
    const [isAscending, setIsAscending] = useState(true); 
    const [error, setError] = useState(null); 

    // Fetch data dynamically from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/users");
                setUsers(response.data);
            } catch (err) {
                setError("Failed to fetch data. Please try again later.");
                console.error(err);
            }
        };
        fetchData();
    }, []);

    // Function to check if a number is an Armstrong number
    // const isArmstrongNumber = (num) => {
    //     const digits = String(num).split('');
    //     const power = digits.length;
    //     const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    //     return sum === num;
    // };

 
     // Filter users based on the search query
     const filteredUsers = users.filter(
        (user) =>
            user.email.toLowerCase().includes(filter.toLowerCase()) ||
            String(user.armstrong_number).includes(filter) ||
            String(user.user_id).includes(filter)
    );

    // Sort users based on the selected key
    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (!sortKey) return 0;
        const aValue = a[sortKey];
        const bValue = b[sortKey];

        if (aValue < bValue) return isAscending ? -1 : 1;
        if (aValue > bValue) return isAscending ? 1 : -1;
        return 0;
    });

    return (
        <>
            {/* Navigation Bar
            <nav className="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/user-numbers">User Details</Link></li>
                    <li><Link to="/verify-armstrong">Verify</Link></li>
                </ul>
            </nav> */}

            <div className="dashboard">
                <h1>Global Users Dashboard</h1>

                {/* Show error message if fetch fails */}
                {error && <div className="error-message">{error}</div>}

                {/* Filter and Sort Controls */}
                <div className="controls">
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />

                    <select
                        onChange={(e) => setSortKey(e.target.value)}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Sort by...
                        </option>
                        <option value="user_id">User ID</option>
                        <option value="email">Email</option>
                        <option value="armstrong_number">Number</option>
                    </select>

                    <button onClick={() => setIsAscending(!isAscending)}>
                        {isAscending ? "Ascending" : "Descending"}
                    </button>
                </div>

                <div className="table-container">
    <table>
        <thead>
            <tr>
                <th>USER ID</th>
                <th>EMAIL</th>
                <th>Armstrong Number</th>
            </tr>
        </thead>
        <tbody>
            {sortedUsers.map((user, index) => (
                <tr key={index}>
                    <td>{user.user_id}</td>
                    <td>{user.email}</td>
                    <td>{user.armstrong_number}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

                {/* User List Table
                <table>
                    <thead>
                        <tr>
                            <th>USER ID</th>
                            <th>EMAIL</th>
                            <th>Armstrong Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.user_id}</td>
                                <td>{user.email}</td>
                                <td>{user.armstrong_number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
            </div>
        </>
    );
};

export default Dashboard;
