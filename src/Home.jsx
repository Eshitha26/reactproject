import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center shadow-lg p-3 mb-5 bg-light rounded">
            <Card.Body>
              <h2>FreshMart</h2>
              <Card.Text className="lead mt-3">
                Welcome to the Mart. Enjoy fresh and high-quality products!
              </Card.Text>
              <Row className="mt-4">
                <Col md={5} className="text-center">
                  <img src="/veg.png" alt="Vegetables" className="img-fluid rounded" />
                  <p className="mt-2">Fresh Vegetables</p>
                </Col>
                <Col md={6} className="text-center">
                  <img src="/Nonvege.png" alt="Non-Veg Products" className="img-fluid rounded" />
                  <p className="mt-2">High-Quality Non-Veg</p>
                </Col>
                <center>
                <Col md={5} className="text-center">
                  <img src="/milkproducts.png" alt="Milk Products" className="img-fluid rounded" />
                  <p className="mt-2">Fresh Dairy Products</p>
                </Col>
                </center>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

