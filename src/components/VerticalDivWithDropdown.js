// VerticalDivWithDropdown.js
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const VerticalDivWithDropdown = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col md={2} className="vertical-div">
          <Button variant="primary">Кнопка 1</Button>
          <Button variant="primary">Кнопка 2</Button>
          <Button variant="primary">Кнопка 3</Button>
          <Button variant="primary">Кнопка 4</Button>
          <Button variant="primary">Кнопка 5</Button>

          <Button variant="primary" onClick={toggleSubMenu}>
            Кнопка 6
          </Button>
          <div className={`sub-menu ${showSubMenu ? 'show' : ''}`}>
            <Button variant="secondary">Кнопка 9</Button>
            <Button variant="secondary">Кнопка 10</Button>
          </div>

          <Button variant="primary">Кнопка 7</Button>
          <Button variant="primary">Кнопка 8</Button>
        </Col>
        <Col>
          <p>Остальной контент</p>
        </Col>
      </Row>
    </Container>
  );
};

export default VerticalDivWithDropdown;
