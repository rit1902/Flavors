import React from 'react';
import './admindashboard.css';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register chart components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

function AdminDashboard() {
  const usersCount = 120;
  const cuisinesCount = 15;
  const recipesCount = 30;

  const data = {
    labels: ['Users', 'Cuisines', 'Recipes'],
    datasets: [
      {
        data: [usersCount, cuisinesCount, recipesCount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/recipedashboard'>Recipes</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/settings'>Settings</Link></li>
        </ul>
      </div>
      <div className="content">
        <header className="header-dash">
          <h1>Admin Overview</h1>
        </header>
        <div className="main-content">
          <div className="stats">
            <div className="stat-card">
              <h3>Total Users</h3>
              <Pie data={{ labels: ['Users'], datasets: [{ data: [usersCount], backgroundColor: ['#FF6384'] }] }} />
              <p>{usersCount}</p>
            </div>
            <div className="stat-card">
              <h3>Total Cuisines</h3>
              <Pie data={{ labels: ['Cuisines'], datasets: [{ data: [cuisinesCount], backgroundColor: ['#36A2EB'] }] }} />
              <p>{cuisinesCount}</p>
            </div>
            <div className="stat-card">
              <h3>Total Recipes</h3>
              <Pie data={{ labels: ['Recipes'], datasets: [{ data: [recipesCount], backgroundColor: ['#FFCE56'] }] }} />
              <p>{recipesCount}</p>
            </div>
          </div>
          <div className="pie-chart">
            <h3>Overall Distribution</h3>
            <div className="overall-pie">
              <Pie data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
