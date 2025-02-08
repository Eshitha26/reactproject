import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  }, [navigate]);

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-danger">404 - Page Not Found</h1>
      <p className="lead">You will be redirected to the homepage in 5 seconds.</p>
      <img src="public/NotFound copy.png" alt="Not Found" className="img-fluid rounded shadow mt-4" style={{ maxWidth: "400px" }} />
    </div>
  );
}

export default Notfound;
