import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/create");
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div className="left">
        <h2 onClick={handleHome}>Quiz App</h2>
      </div>
      <div className="middle">
        <input
          className="inputTag"
          type="text"
          placeholder="Search for a new quiz"
        />
        <SearchIcon className="search" />
      </div>
      <div className="left">
        <button onClick={handleCreate} className="create">
          Create a Quiz
        </button>

        <button className="signin">Sign In</button>
      </div>
    </div>
  );
};

export default Header;
