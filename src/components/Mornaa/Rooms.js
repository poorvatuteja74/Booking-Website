import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deluxeRoomImage from '../../assets/img/deluxeroom.jpeg';
import largeRoomImage from '../../assets/img/largeroom.jpg';
import cozyRoomImage from '../../assets/img/cozyroom.jpg';

export default function Rooms() {
  return (
    <div className="features-4">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Take a tour, a pleasure!</h2>
            <h4 className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card
              className="card-background card-raised"
              style={{
                backgroundImage: `url(${largeRoomImage})`
              }}
            >
              <div className="info">
                <div className="icon icon-white">
                  <i className="now-ui-icons business_bulb-63"></i>
                </div>
                <div className="description">
                  <h4 className="info-title" style={{ color: 'white' }}>Large Room</h4>
                  <Link
                    className="btn btn-outline-light mt-3"
                    to="/largeroom"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#000' }}
                  >
                    Find more
                  </Link>
                </div>
              </div>
            </Card>
          </Col>
          <Col md="4">
            <Card
              className="card-background card-raised"
              style={{ backgroundImage: `url(${deluxeRoomImage})` }}
            >
              <div className="info">
                <div className="icon icon-white">
                  <i className="now-ui-icons business_badge"></i>
                </div>
                <div className="description">
                  <h4 className="info-title" style={{ color: 'white' }}>Deluxe Room</h4>
                  <Link
                    className="btn btn-outline-light mt-3"
                    to="/deluxeroom"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#000' }}
                  >
                    Find more
                  </Link>
                </div>
              </div>
            </Card>
          </Col>
          <Col md="4">
            <Card
              className="card-background card-raised"
              style={{
                backgroundImage: `url(${cozyRoomImage})`
              }}
            >
              <div className="info">
                <div className="icon icon-white">
                  <i className="now-ui-icons location_map-big"></i>
                </div>
                <div className="description">
                  <h4 className="info-title" style={{ color: 'white' }}>Cozy Room</h4>
                  <Link
                    className="btn btn-outline-light mt-3"
                    to="/cozyroom"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#000' }}
                  >
                    Find more
                  </Link>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
