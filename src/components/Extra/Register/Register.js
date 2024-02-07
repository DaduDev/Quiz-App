import React from "react";
import "./Register.css";
import AddHead from "../Add_Head/AddHead";

const Register = () => {
  return (
    <div>
      <AddHead />
      <div className="full">
        <div className="register">
          <h1>Register</h1>
          <input className="nameTag" type="text" placeholder="Name" />
          <input className="mailTTag" type="text" placeholder="Email" />
          <input className="passTTag" type="password" placeholder="Password" />
          <input
            className="passTTag"
            type="password"
            placeholder="Confirm Password"
          />
          <button>Register</button>
        </div>
        <div className="log">
          <h3>Already have an account?</h3>
          <button
            onClick={() => {
              window.location.href = "/signin";
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
