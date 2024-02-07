import React from "react";
import "./SignIn.css";
import AddHead from "../Add_Head/AddHead";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const handleSingIn = () => {
    navigate("/register");
  };
  return (
    <div>
      <AddHead />
      <div className="full">
        <div className="login">
          <h1>Sign In</h1>
          <input className="mailTag" type="text" placeholder="Email" />
          <input className="passTag" type="password" placeholder="Password" />
          <button>Sign In</button>
        </div>
        <div className="regi">
          <h3>Don't have an account?</h3>
          <button onClick={handleSingIn}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
