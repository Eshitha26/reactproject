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
            <p>Our mission is to help users find Delicious food.</p>
            <img src="all.png"></img>
          </p>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default Aboutus;
