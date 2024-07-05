import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components
const items = [
  {
    src: "url(" + require("assets/img/suite.jpeg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-right" md="6">
          <h1 className="title">On the run tour.</h1>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  },
  {
    src: "url(" + require("assets/img/deluxeroom.jpeg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h1 className="title">Deluxe Rooms</h1>
          <br></br>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  },
  {
    src: "url(" + require("assets/img/lake.jpeg") + ")",
    content: (
      <Row>
        <Col className="text-left" md="6">
          <h1 className="title">Embark on Lakeside Bliss and Trail Treks</h1>
          <br></br>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  }
];

function Headers() {
  // navbar collapses states and functions
  const [navbarOpen1, setNavbarOpen1] = React.useState(false);
  const [navbarOpen2, setNavbarOpen2] = React.useState(false);
  const [navbarOpen3, setNavbarOpen3] = React.useState(false);
  // header 3 carousel states and functions
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      {navbarOpen1 || navbarOpen2 || navbarOpen3 ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setNavbarOpen1(false);
            setNavbarOpen2(false);
            setNavbarOpen3(false);
          }}
        />
      ) : null}
      <div className="cd-section" id="headers">
        <div className="header-1">
          <Navbar
            className="navbar-transparent bg-info navbar-absolute"
            expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <button
                  aria-expanded={navbarOpen1}
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setNavbarOpen1(!navbarOpen1);
                  }}
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                     <img
                      src={require("../../assets/img/logo.jpg")}
                      alt="Logo"
                      style={{ height: "60px", marginRight: "10px" }}
                      />
                </NavbarBrand>


              </div>
              <Collapse navbar isOpen={navbarOpen1}>
                <Nav className="mx-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()} style={{ fontSize: '.80rem' }}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()} style={{ fontSize: '.80rem' }}>
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()} style={{ fontSize: '.80rem' }}>
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="nav" navbar>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      style={{ fontSize: '1.5rem' }}
                    >
                      <i className="fab fa-twitter"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.facebook.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      style={{ fontSize: '1.5rem' }}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                      style={{ fontSize: '1.5rem' }}
                    >
                      <i className="fab fa-instagram"></i>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="header-3">
          <Navbar
            className="navbar-transparent bg-info navbar-absolute"
            expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <button
                  aria-expanded={navbarOpen3}
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setNavbarOpen3(!navbarOpen3);
                  }}
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>

              </div>
            </Container>
          </Navbar>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {items.map((item) => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}
                >
                  <div className="page-header header-filter">
                    <div
                      className="page-header-image"
                      style={{
                        backgroundImage: item.src
                      }}
                    ></div>
                    <div className="content">
                      <Container className="text-left">
                        {item.content}
                      </Container>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
            <a
              className="left carousel-control carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              <span className="now-ui-icons arrows-1_minimal-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              <span className="now-ui-icons arrows-1_minimal-right" />
              <span className="sr-only">Next</span>
            </a>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Headers;
