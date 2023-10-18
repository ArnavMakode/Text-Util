import React from "react";

const customAlertStyle = {
  position: 'fixed',
  bottom: '20px', /* Adjust this value to control how far above the edge of the screen the alert appears */
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: '1000', /* Ensure the alert appears above other elements */
  textAlign: 'center', /* Center-align text inside the alert */
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', /* Optional: Add box shadow for a subtle effect */
};

const Alert = ({ alert }) => {
  return (
    alert && (
      <div className={`alert alert-${alert.type}`} role="alert" style={customAlertStyle}>
        <strong>{alert.message}</strong>
      </div>
    )
  );
};

export default Alert;
