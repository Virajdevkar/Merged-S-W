
import React, { useState } from 'react';
import '../BC-css/SideBar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login state
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Track admin login state for Reports

  // const toggleSidebar = () => {
  //   setIsExpanded(!isExpanded);
  // };

  const handleLogin = () => {
    // Implement your login logic here, e.g., validate credentials and set isLoggedIn to true.
    // For simplicity, we'll set isLoggedIn to true directly.
    setIsLoggedIn(true);
  };

  const handleAdminLogin = () => {
    // Implement admin login logic here, e.g., validate admin credentials and set isAdminLoggedIn to true.
    // For simplicity, we'll set isAdminLoggedIn to true directly.
    setIsAdminLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here, e.g., clear session and set isLoggedIn and isAdminLoggedIn to false.
    // For simplicity, we'll set isLoggedIn and isAdminLoggedIn to false directly.
    setIsLoggedIn(false);
    setIsAdminLoggedIn(false);
  };

  return (
    <nav className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="toggle-button">
        <i className={`fas fa-${isExpanded ? 'angle-left' : 'angle-right'}`}></i>
      </div>
      <ul className="menu">
        <MenuItem icon="chart-bar" text="Dashboard" />
        <MenuItem icon="file-invoice" text="Invoices">
          <SubMenuItem text="Create Invoice" />
          <SubMenuItem text="Manage Invoices" />
          <SubMenuItem text="Invoice History" />
        </MenuItem>
        <MenuItem icon="users" text="Customers" />
        <MenuItem icon="cubes" text="Products" />
        {isAdminLoggedIn ? (
          <MenuItem icon="chart-pie" text="Reports" />
        ) : (
          // Admin login option for accessing Reports
          <li className="menu-item" onClick={handleAdminLogin}>
            <div>
              <i className="fas fa-user-shield"></i> Admin Login
            </div>
          </li>
        )}
        {isLoggedIn ? (
          <>
            <MenuItem icon="cog" text="Settings">
              <SubMenuItem text="General" />
              <SubMenuItem text="Notifications" />
              <SubMenuItem text="Profile" />
            </MenuItem>
            <li className="menu-item" onClick={handleLogout}>
              <div>
                <i className="fas fa-sign-out-alt"></i> Logout
              </div>
            </li>
          </>
        ) : (
          <li className="menu-item" onClick={handleLogin}>
            <div>
              <i className="fas fa-sign-in-alt"></i> Login
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

const MenuItem = ({ icon, text, children }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li className={`menu-item ${isSubMenuOpen ? 'open' : ''}`} onClick={toggleSubMenu}>
      <div>
        <i className={`fas fa-${icon}`}></i> {text}
        {children && (
          <i className={`fas fa-${isSubMenuOpen ? 'angle-up' : 'angle-down'} sub-menu-icon`}></i>
        )}
      </div>
      {children && <ul className={`sub-menu ${isSubMenuOpen ? 'open' : ''}`}>{children}</ul>}
    </li>
  );
};

const SubMenuItem = ({ text }) => {
  return <li className="sub-menu-item">{text}</li>;
};

export default Sidebar;