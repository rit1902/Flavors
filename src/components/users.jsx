import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:8080/api/flavors/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
                setError('Error fetching users');
            });
    };

    const handleDeleteUser = (id) => {
        // Show warning notification
        if (window.confirm("Are you sure you want to delete this user?")) {
            deleteUser(id);
        }
    };

    const deleteUser = (id) => {
        axios.delete(`http://localhost:8080/api/flavors/delete/${id}`)
            .then(() => {
                fetchUsers(); // Refresh the list after deletion
                // Show success notification
                toast.success('User deleted successfully!');
            })
            .catch(error => {
                console.error("There was an error deleting the user!", error);
                setError('Error deleting user');
                // Show error notification
                toast.error('Error deleting user.');
            });
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <h2>Admin Dashboard</h2>
                <ul>
                    <li><Link to='/admindashboard'>Dashboard</Link></li>
                    <li><Link to='/recipedashboard'>Manage Recipes</Link></li>
                    <li>Users</li>
                    {/* <li><Link to='/settings'>Settings</Link></li> */}
                </ul>
            </div>
            <div className="content">
                <header className="header-dash">
                    <h1>User List</h1>
                </header>
                <div className="main-content">
                    {error && <p className="error">{error}</p>}
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.customerId}>
                                    <td>{user.customerId}</td>
                                    <td>{user.username}</td>
                                    <td>{user.emailId}</td>
                                    <td>{user.mobileNumber}</td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user.customerId)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer /> {/* Add ToastContainer to render notifications */}
        </div>
    );
};

export default Users;
