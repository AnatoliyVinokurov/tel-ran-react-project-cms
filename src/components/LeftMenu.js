import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LeftMenu.css';
import { Accordion, Button } from 'react-bootstrap';

const LeftMenu = () => {
    const changeBackgroundColor = () => {
        const dashboardDiv = document.querySelector('.dashboard');
        dashboardDiv.style.backgroundColor = '#fefcfc';
        dashboardDiv.style.color = '#2ed47a';

        const businessrequestsDiv = document.querySelector('.business-requests');
        businessrequestsDiv.style.backgroundColor = '#fefcfc';
        businessrequestsDiv.style.color = '#2ed47a';
    };

    return (
        <div className='left-menue-full-clicked  '>
            <div className="account-information">
                <div className="help-text">
                    <div className="user-name">User Name</div>
                </div>
                <img className="profile-icon" alt="" src="./img/profile-icon.svg" />
            </div>

            <div className="separator"></div>


            <Button className="dashboard" onClick={changeBackgroundColor} variant="">
                <div className="help-text">
                    <div className="user-name">Dashboard</div>
                </div>
                <img className="profile-icon" alt="" src="./img/dashboard-icon.svg" />
            </Button>{' '}





            <Accordion defaultActiveKey="0" variant="">
                <Accordion.Item eventKey="1" className="factories">
                    <Accordion.Header className="">


                        <div className="help-text2">
                            <div className="user-name">Factories</div>
                        </div>

                        <img className="profile-icon" alt="" src="./img/factories-icon.svg" />

                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="dashboard" onClick={changeBackgroundColor}>
                            <div className="help-text">
                                <div className="user-name">Dashboard Bla-Bla</div>
                            </div>
                            <img className="profile-icon" alt="" src="./img/dashboard-icon.svg" />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion defaultActiveKey="0" variant="">
                <Accordion.Item eventKey="1" className="agents">
                    <Accordion.Header className="">


                        <div className="help-text2">
                            <div className="user-name">Agents</div>
                        </div>

                        <img className="profile-icon" alt="" src="./img/agents-icon.svg" />

                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="dashboard" onClick={changeBackgroundColor}>
                            <div className="help-text">
                                <div className="user-name">Dashboard Bla-Bla</div>
                            </div>
                            <img className="profile-icon" alt="" src="./img/dashboard-icon.svg" />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>





            <Button className="business-requests" onClick={changeBackgroundColor} variant="">
                <div className="br-text">
                    <div className="user-name">Business requests</div>
                </div>
                <img className="profile-icon" alt="" src="./img/br-icon.svg" />
            </Button>{' '}




            <Button className="orders" onClick={changeBackgroundColor} variant="">
                <div className="help-text">
                    <div className="user-name">Orders</div>
                </div>
                <img className="profile-icon" alt="" src="./img/orders-icon.svg" />
            </Button>{' '}

            <div className='separator2'></div>


        </div>
    );
};

export default LeftMenu;
