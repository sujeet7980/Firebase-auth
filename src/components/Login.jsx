import React, { useState } from "react";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./style.css";
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    signInWithEmailAndPassword(auth,user.email,user.password)
    .then((res)=> navigate("/"))
    .catch((error)=>console.log(error));
   
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="login" data-aos="fade-down">
      <div className="login-form">
        <h2>Sign in to us</h2>
        <form onSubmit={handleSubmit} action="/home">
          <p>
            <label>Username or email address</label>
            <br />
            <input  type="email" name="email" value={user.email} onChange={handleInputChange}   required  />
          </p>
          <p>
            <label>Password</label>
            <Link to="/forget-password">
              <label className="right-label">Forget password?</label>
            </Link>
            <br />
            <input type="password" name="password" value={user.password} onChange={handleInputChange} required/>
          </p>
          <p>
            <button id="sub_btn" type="submit">
              Login
            </button>
          </p>
        </form>
        <footer>
          <p>
            First time? <Link to="/signup">Create an account</Link>.
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Signup;
