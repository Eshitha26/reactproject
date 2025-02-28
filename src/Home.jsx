import { Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import custom CSS for full-page styling

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="fullpage-carousel">
      <Carousel fade interval={3000} controls={true} indicators={true}>
        <Carousel.Item onClick={() => navigate("/veg")} className="carousel-item-fullpage">
          <img
            className="d-block w-100"
            src="/veg.png"
            alt="Fresh Vegetables"
          />
          <Carousel.Caption>
            <h1>Fresh Vegetables 🥦🥕</h1>
            <p>Click to explore fresh and organic vegetables.</p>
            <Button variant="success" onClick={() => navigate("/veg")}>
              Explore Veggies
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item onClick={() => navigate("/nonveg")} className="carousel-item-fullpage">
          <img
            className="d-block w-100"
            src="/Nonvege.png"
            alt="High-Quality Non-Veg"
          />
          <Carousel.Caption>
            <h1>High-Quality Non-Veg 🍗🥩</h1>
            <p>Click to browse premium non-veg products.</p>
            <Button variant="danger" onClick={() => navigate("/nonveg")}>
              Explore Non-Veg
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item onClick={() => navigate("/milk")} className="carousel-item-fullpage">
          <img
            className="d-block w-100"
            src="/milkproducts.png"
            alt="Fresh Dairy Products"
          />
          <Carousel.Caption>
            <h1>Fresh Dairy Products 🥛🧀</h1>
            <p>Click to view fresh dairy products for daily use.</p>
            <Button variant="warning" onClick={() => navigate("/milk")}>
              Explore Dairy
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
