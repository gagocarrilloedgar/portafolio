import React from "react";
import { ButtonContained } from "common";

export const DownloadButton = ({ image }) => {
  const download = () => {
    var element = document.createElement("a");
    var file = new Blob([image], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = "qrProfile.jpg";
    element.click();
  };
  return (
    <React.Fragment>
      <ButtonContained title={"Descargar"} action={download} />
    </React.Fragment>
  );
};

export default DownloadButton;
