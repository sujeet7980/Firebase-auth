import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import './style.css'
const Home = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  const handleLogout =()=>{

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <>
      <div className="navbar">
        {userName ? (
          <>
            <span>{`Welcome ${userName}`}</span>
            <button id="btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
