import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home";
import "./App.css";
import Milk from "./Milk";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import Nonveg from "./Nonveg";
import Order from "./Order";
import Notfound from "./Notfound";
import Login from "./Login";
import { logout } from "./Store";
import { Container, Navbar, Nav, Button, Badge } from "react-bootstrap";
import Veg from "./Veg";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      {/* Fixed Navbar */}
      <Navbar
        fixed="top"
        style={{ background: "linear-gradient(45deg, #6a11cb, #2575fc)" }}
        variant="dark"
        expand="lg"
        className="mb-4"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className="fw-bold text-white">
            <i className="fas fa-seedling me-2"></i>FreshMart 🌿
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/veg" className="text-light">
                <i className="fas fa-carrot me-1"></i>Veg
              </Nav.Link>
              <Nav.Link as={Link} to="/nonveg" className="text-light">
                <i className="fas fa-drumstick-bite me-1"></i>Nonveg
              </Nav.Link>
              <Nav.Link as={Link} to="/milk" className="text-light">
                <i className="fas fa-glass-whiskey me-1"></i>Milk
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="text-light">
                <i className="fas fa-shopping-cart me-1"></i>Cart 
                <Badge bg="light" text="dark">{totalItems}</Badge>
              </Nav.Link>
              <Nav.Link as={Link} to="/order" className="text-light">
                <i className="fas fa-clipboard-list me-1"></i>Order
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus" className="text-light">
                <i className="fas fa-info-circle me-1"></i>AboutUs
              </Nav.Link>
              <Nav.Link as={Link} to="/contactus" className="text-light">
                <i className="fas fa-phone me-1"></i>ContactUs
              </Nav.Link>
            </Nav>

            <Nav>
              {isAuthenticated ? (
                <>
                  <Navbar.Text className="me-2 text-white">
                    <i className="fas fa-user me-1"></i>Welcome, {user}
                  </Navbar.Text>
                  <Button
                    variant="danger"
                    className="rounded-pill px-4"
                    onClick={() => dispatch(logout())}
                  >
                    <i className="fas fa-sign-out-alt me-1"></i>Logout
                  </Button>
                </>
              ) : (
                <Button
                  variant="info"
                  className="rounded-pill px-4 text-white"
                  as={Link}
                  to="/login"
                  style={{ background: "linear-gradient(90deg, #56ccf2, #2f80ed)" }}
                >
                  <i className="fas fa-sign-in-alt me-1"></i>Sign In
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content Container */}
      <Container className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
