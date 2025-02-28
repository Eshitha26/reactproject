import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, Card, Row, Col } from "react-bootstrap";

function Aboutus() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow-sm p-4 w-100">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={6} className="text-center">
              <h1 className="text-primary">
                <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                About Us
              </h1>
              <h2 className="mt-4">Welcome to our platform!</h2>
              <h4 className="text-secondary">
                We are passionate about delivering the best experience possible.
              </h4>
              <p className="mt-3">
                Our mission is to help users find delicious food.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="all.png"
                alt="Delicious Food"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Aboutus;
