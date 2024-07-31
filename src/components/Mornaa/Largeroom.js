import React from 'react';
import Select from 'react-select';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Form,
  FormGroup
} from 'reactstrap';

import lake from '../../assets/img/lake.jpeg';

import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar.js';
import Footer from 'components/Footers/Footer';

const items = [
  {
    src: require('assets/img/large2.jpg'),
    altText: '',
    caption: '',
  },
  // ... other items
];

function ProductPageHeader({ backgroundImage, headerImage }) {
  return (
    <div
      className="page-header page-header-small"
      style={{ backgroundImage: `url(${lake})` }}
    >
      <div className="filter" />
    </div>
  );
}

export default function Largeroom() {
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

  const [collapses, setCollapses] = React.useState([1]);

  const changeCollapse = (collapse) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  const [specialitySelect, setSpecialitySelect] = React.useState(null);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add('product-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('product-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);

  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <ProductPageHeader backgroundImage={require('assets/img/large2.jpg').default} />
        <div className="section">
          <Container>
            <Row>
              <Col md="5">
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                  {items.map((item) => {
                    return (
                      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
                        <img src={item.src} alt={item.altText} className="d-block img-raised" />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <Button className="btn-icon btn-round" color="info" name="button" size="sm" type="button">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                    </Button>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <Button className="btn-icon btn-round" color="info" name="button" size="sm" type="button">
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </Button>
                  </a>
                </Carousel>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">Large Room</h2>
                <h5 className="category">Slim-Fit Leather Biker Jacket</h5>
                <div aria-multiselectable={true} className="card-collapse" id="accordion" role="tablist">
                  <Card className="card-plain">
                    <CardHeader id="headingOne" role="tab">
                      <h5 className="mb-0">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#pablo"
                          aria-expanded={collapses.includes(1)}
                          aria-controls="collapseOne"
                          onClick={(e) => {
                            e.preventDefault();
                            changeCollapse(1);
                          }}
                        >
                          Description
                        </a>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(1)}>
                      <CardBody>
                        <p>
                          Eres' daring 'Grigri Fortune' swimsuit has the fit and coverage of a bikini in a one-piece
                          silhouette. This fuchsia style is crafted from the label's sculpting peau douce fabric and has
                          flattering cutouts through the torso and back. Wear yours with mirrored sunglasses on vacation.
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section">
          <Container>
            <Row>
              <Col className="mr-auto ml-auto" md="8">
                <h2 className="text-center title">Want to Book?</h2>
                <h4 className="text-center description">
                  Lorem 
                </h4>
                <Form className="contact-form">
                  <Row>
                    <Col md="4">
                      <label>First name</label>
                      <InputGroup className={firstFocus ? "input-group-focus" : ""}>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="firstname"
                          placeholder="First Name..."
                          type="text"
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                        />
                      </InputGroup>
                    </Col>
                    <Col md="4">
                      <label>Your email</label>
                      <InputGroup className={emailFocus ? "input-group-focus" : ""}>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="email"
                          placeholder="Email..."
                          type="text"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        />
                      </InputGroup>
                    </Col>
                    <Col className="ml-auto mr-auto text-center" md="4">
                      <Button className="btn-round mt-4" color="info" size="lg">
                        Call us
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
                  </Row>
          </Container>
        </div>
      </div>
      <Footer/>
    </>
  );
}
