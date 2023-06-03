import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./style.css";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from '../firebase'
const SignUp = () =>{
  const navigate = useNavigate();
  // const auth = getAuth();
  const [user, setUser] = useState({
    name: "",
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
    console.log(auth);
     createUserWithEmailAndPassword(auth, user.email, user.password)
      .then( async  (res) => {
        // console.log(res);
        const username = res.user;
        await updateProfile(username, {
          displayName: user.name,
        });
        navigate("/");
      })
      .catch((err) => {
        // console.log(err.message);
      });
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="signup " data-aos="fade-down">
      <div className="signup-form">
        <h2>Join us</h2>
        <h5>Create your personal account</h5>
        <form onSubmit={handleSubmit} action="/home">
          <p>
            <label>Username</label>
            <br />
            <input  type="text" name="name" value={user.name} onChange={handleInputChange} autoComplete="off" required />
          </p>
          <p>
            <label>Email address</label>
            <br />
            <input  type="email" name="email" value={user.email} onChange={handleInputChange} autoComplete="off"  required />
          </p>
          <p>
            <label>Password</label>
            <br />
            <input type="password" name="password" value={user.password} onChange={handleInputChange}  autoComplete="off"  required />
          </p>
          <p>
            <button id="sub_btn" type="submit">
           Register 
            </button>
          </p>
        </form>
        <footer>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default SignUp;
