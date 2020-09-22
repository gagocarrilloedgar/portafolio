import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

var style = {
  backgroundColor: "#2255ff",
  textAlign: "center",
  padding: "12px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%",
};

var phantom = {
  display: "block",
  padding: "10px",
  height: "50px",
  width: "100%",
};

export function  Footer() {
  return (
    <div>
      <div style={phantom} />

      <div style={style}>
        <a margin="5px" href="https://www.facebook.com/projectportfolio/">
          <FacebookIcon style={{ color: "white" }} />
        </a>
        <a margin="5px" href="https://www.instagram.com/pportfol.io">
          <InstagramIcon style={{ color: "white" }} />
        </a>
        <a href="https://www.linkedin.com/company/pportfolio">
          <LinkedInIcon size={20} style={{ color: "white" }} />
        </a>
      </div>
    </div>
  );
}
