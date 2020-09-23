import React from "react";
import { Menu as Nav, Icon, Button } from "element-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, handleSignout }) => (
  <Nav mode="horizontal" theme="dark" defaultActive="1">
    <div className="nav-container">
      {/* App Title / Icon */}
      <Nav.Item index="1">
        <svg
          width="2em"
          height="2em"
          viewBox="32"
          className="bi bi-building"
          fill="var(--amazonOrange)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
          />
          <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
        </svg>
        <NavLink to="/" className="nav-link">
          <span className="app-title">AmplifyAgora</span>
        </NavLink>
      </Nav.Item>

      {/* Navbar Items */}
      <div className="nav-items">
        <Nav.Item index="2">
          <span className="app-user">Hello, {user.username}</span>
        </Nav.Item>
        <Nav.Item index="3">
          <NavLink to="/profile" className="nav-link">
            <Icon name="setting" />
            Profile
          </NavLink>
        </Nav.Item>
        <Nav.Item index="4">
          <Button type="warning" onClick={handleSignout}>
            Sign Out
          </Button>
        </Nav.Item>
      </div>
    </div>
  </Nav>
);

export default Navbar;
