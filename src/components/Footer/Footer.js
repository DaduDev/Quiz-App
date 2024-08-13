import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="container">
            <div className="gitSource" onClick={() => window.location.href = 'https://github.com/DaduDev/Quiz-App'}>
            <GitHubIcon />
            <span>Source Code</span>
          </div>
          
        </div>
        <div className="socials">
          <Button className="twitter" href="/">
            <TwitterIcon />
          </Button>
          <Button className="instagram" href="/">
            <InstagramIcon />
          </Button>
          <Button className="github" href="/">
            <GitHubIcon />
          </Button>
        </div>
      </footer>
  );
};

export default Footer;
