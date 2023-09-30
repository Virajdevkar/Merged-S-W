import React, { useState, useEffect } from 'react';
import '../css/AdminCtrl.css'; // Import the CSS file

const AdminCtrl = () => {
  const [adminPassword, setAdminPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    employeeId: '',
    name: '',
    mobileNumber: '',
    workingTime: '',
    image: null,
  });

  // Function to fetch employee data from the API
  const fetchEmployeeData = async () => {
    try {
      const response = await fetch('https://your-api-url.com/employees');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setEmployeeData(data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  useEffect(() => {
    // Fetch employee data when the component mounts
    fetchEmployeeData();
  }, []);

  // Function to handle OTP verification and show employee details
  const handleOtpVerification = () => {
    // Implement OTP verification logic here
    if (otp === '123456') {
      setShowEmployeeDetails(true);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  // Function to handle adding a new employee
  const handleAddEmployee = async () => {
    // Implement logic to add a new employee to the database
    try {
      const response = await fetch('https://your-api-url.com/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      });
      if (!response.ok) {
        throw new Error('Failed to add employee');
      }
      // After successfully adding the employee, fetch updated employee data
      fetchEmployeeData();
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  // Function to handle removing an employee
  const handleRemoveEmployee = async (employeeId) => {
    // Implement logic to remove an employee from the database
    if (window.confirm('Are you sure you want to remove this employee?')) {
      try {
        const response = await fetch(`https://your-api-url.com/employees/${employeeId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to remove employee');
        }
        // After successfully removing the employee, fetch updated employee data
        fetchEmployeeData();
      } catch (error) {
        console.error('Error removing employee:', error);
      }
    }
  };

  return (
    <>
    <div className="Dashboard">
        <h2>
        Dashboard
        </h2>
    </div>
    <div className="admin-container">
      <div className="admin-section">
        <h2>Admin Information</h2>
        <p>Admin ID: YourAdminID</p>
        {otpSent ? (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleOtpVerification}>Verify OTP</button>
          </>
        ) : (
          <>
            <p>Password: ********</p>
            <button onClick={() => setOtpSent(true)}>Send OTP</button>
          </>
        )}
      </div>
      <div className="employee-section">
      <h2>Employee Details</h2>
      </div>
      {showEmployeeDetails && (
        <div className="employee-section">
          <h2>Employee Details</h2>
          <ul>
            {employeeData.map((employee) => (
              <li key={employee.employeeId}>
                <div className="employee-card">
                  <img src={employee.image} alt={employee.name} />
                  <div className="employee-details">
                    <h3>{employee.name}</h3>
                    <p>Employee ID: {employee.employeeId}</p>
                    <p>Mobile Number: {employee.mobileNumber}</p>
                    <p>Sales This Week: {employee.salesThisWeek}</p>
                    <p>Working Time: {employee.workingTime}</p>
                    <button onClick={() => handleRemoveEmployee(employee.employeeId)}>
                      Remove Employee
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="add-employee-section">
            <h2>Add New Employee</h2>
            <input
              type="text"
              placeholder="Employee ID"
              value={newEmployee.employeeId}
              onChange={(e) => setNewEmployee({ ...newEmployee, employeeId: e.target.value })}
            />
            <input
              type="text"
              placeholder="Name"
              value={newEmployee.name}
              onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={newEmployee.mobileNumber}
              onChange={(e) => setNewEmployee({ ...newEmployee, mobileNumber: e.target.value })}
            />
            <input
              type="text"
              placeholder="Working Time"
              value={newEmployee.workingTime}
              onChange={(e) => setNewEmployee({ ...newEmployee, workingTime: e.target.value })}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
            />
            <button onClick={handleAddEmployee}>Add Employee</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default AdminCtrl;
