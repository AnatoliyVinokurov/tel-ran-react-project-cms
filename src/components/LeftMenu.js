import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LeftMenu.css';

const LeftMenu = () => {
  const changeBackgroundColor = () => {
    const dashboardDiv = document.querySelector('.dashboard');
    dashboardDiv.style.backgroundColor = '#fefcfc';
    dashboardDiv.style.color = '#2ed47a'; // Use 'color' instead of 'Textcolor'
  };

  return (
    <div className='left-menue-full-clicked'>
      <div className="account-information">
        <div className="help-text">
          <div className="user-name">User Name</div>
        </div>
        <img className="profile-icon" alt="" src="./img/profile-icon.svg" />
      </div>

      <div className="separator"></div>

      <div className="dashboard" onClick={changeBackgroundColor}>
        <div className="help-text">
          <div className="user-name">Dashboard</div>
        </div>
        <img className="profile-icon" alt="" src="./img/dashboard-icon.svg" />
      </div>
    </div>
  );
};

export default LeftMenu;
