import React, { useState } from "react";
import "./Register.css";
import AddHead from "../Add_Head/AddHead";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      if (password === confirmPassword) {
        navigate("/");
      } else {
        alert("Password does not match");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <AddHead />
      <div className="full">
        <form onSubmit={handleSignUp} method="post" className="register">
          <h1>Register</h1>
          <input
            className="mailTTag"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email"
          />
          <input
            className="passTTag"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password"
          />
          <input
            className="passTTag"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Confirm Password"
          />
          <button onClick={handleSignUp} type="submit">
            Register
          </button>
        </form>
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
