import React, { Component, useState} from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";

export const DropzoneDialogImage = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  console.log(files);

  const handleSave = (files) => {
    //Saving files to state for further use and closing Modal.
    setFiles(files);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Subir imagen del proyecto</Button>
      <DropzoneDialog
        open={open}
        onSave={(e) => handleSave(e)}
        acceptedFiles={["image/jpeg", "image/png", "image/bmp", "image/jpg"]}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={handleClose}
      />
    </div>
  );
};

export default DropzoneDialog;
