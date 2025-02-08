/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, Card, ListGroup } from "react-bootstrap";

function Aboutus() {
  return (
    <Container className="mt-5">
      <Card className="shadow-sm">
        <Card.Body>
          r<h1 className="text-primary mb-4">About Us</h1>
          <p>
            Welcome to our platform! We are passionate about delivering the best experience possible.  
            Our mission is to help users find great solutions with ease and efficiency.
          </p>

          <ListGroup variant="flush" className="mt-4">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faEnvelope} className="me-2 text-danger" />
              Email: <a href="mailto:freshmart@example.com">freshmart@gmail.com,
                freshmart@yahoo.com</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faPhone} className="me-2 text-success" />
              Phone: <a href="tel:+919346144888">+91 9346144888</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-primary" />
              Location: FreshMart HitechCity,Hyd.
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

    
      <div className="mt-4">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631532264!3d-37.817209979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2c57f1d%3A0x1022b5428f5d8401!2sTech%20Street!5e0!3m2!1sen!2sus!4v1628860665715!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </Container>
  );
}

export default Aboutus;*/


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, Card } from "react-bootstrap";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

function Aboutus() {
  return (
    <Container className="mt-5">
      <Card className="shadow-sm">
        <Card.Body>
          <h1 className="text-primary">
  
            About Us
          </h1>
          <p className="mt-3">
            <h1>Welcome to our platform!</h1>
             <h3>We are passionate about delivering the best experience possible.</h3>  
            <h3>Our mission is to help users find Delicious food.</h3>
            <img src="all.png"></img>
          </p>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default Aboutus;
