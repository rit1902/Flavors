import React from 'react';
import { Link } from 'react-router-dom';
import './adminlogin.css';

const AdminLoginForm = () => {
  return (
    <div className="admin-background">
      <form className="admin-form" action="" method="POST" target="_self">
        <h1 className="admin-form__title">Admin Access</h1>
        <input
          type="text"
          name="username"
          id="admin-username"
          className="admin-form__input"
          placeholder="Username"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          id="admin-password"
          className="admin-form__input"
          placeholder="Password"
          autoComplete="off"
        />
        <Link to='/admindashboard'>
        <input
          type="submit"
          id="admin-submit"
          className="admin-form__submit"
          value="Submit"
        />
        </Link>
      </form>
    </div>
  );
};

export default AdminLoginForm;
