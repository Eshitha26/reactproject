import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";

function Login() {
  let username = useRef(null);
  let password = useRef(null);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let loginCheck = () => {
    if (username.current.value === "Eshitha" && password.current.value === "Eshi@123") {
      dispatch(login(username.current.value));
      navigate("/home");
    } else {
      alert("Your credentials are wrong. Check once!");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Login Page</h1>
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">User Name:</label>
          <input type="text" ref={username} id="username" className="form-control" placeholder="Enter your username" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" ref={password} id="password" className="form-control" placeholder="Enter your password" />
        </div>

        <button onClick={loginCheck} className="btn btn-success w-100">Login</button>
      </div>
    </div>
  );
}

export default Login;
