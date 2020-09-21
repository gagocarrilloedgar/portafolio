import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

var style = {
  backgroundColor: "#ffffff",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

var phantom = {
  display: "block",
  padding: "10px",
  height: "60px",
  width: "100%",
};

function Footer() {
  return (
    <div>
      <div style={phantom} />

      <div style={style}>
        <a margin="10px" href="https://www.facebook.com/projectportfolio/">
          <FacebookIcon style={{ color: "#2255ff" }} />
        </a>
        <a margin="10px" href="https://www.instagram.com/pportfol.io">
          <InstagramIcon style={{ color: "#2255ff" }} />
        </a>
        <a href="https://www.linkedin.com/company/pportfolio">
          <LinkedInIcon size={20} style={{ color: "#2255ff" }} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
