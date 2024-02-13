import React, { useState } from "react";
import "./SignIn.css";
import AddHead from "../Add_Head/AddHead";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const handleSingin = () => {
    navigate("/register");
  };
  return (
    <div>
      <AddHead />
      <div className="full">
        <form onSubmit={handleSignIn} className="login">
          <h1>Sign In</h1>
          <input
            className="mailTag"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={email}
            placeholder="Email"
          />
          <input
            className="passTag"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password"
          />
          <button onClick={handleSignIn}>Sign In</button>
        </form>
        <div className="regi">
          <h3>Don't have an account?</h3>
          <button onClick={handleSingin}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
