import React from "react";
import ClipLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  margin: auto;
  border-color: black;
`;

export const Loading = () => {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={30}  />
    </div>
  );
};

export default Loading;
