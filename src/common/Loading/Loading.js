import React from "react";
import ClipLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  margin: auto;
  border-color: #2255ff;
  padding-top: 200px;

`;

export const Loading = () => {
  return (
    <div className="sweet-loading">
      <ClipLoader color={"#2255ff"} css={override} size={30} />
    </div>
  );
};

export default Loading;
