import React from "react";
import { Helmet } from "react-helmet";

function HelmetMain({ title }) {
  return (
    <Helmet>
      <title>{!title ? "Pportfolio" : title}</title>
    </Helmet>
  );
}

export default HelmetMain;
