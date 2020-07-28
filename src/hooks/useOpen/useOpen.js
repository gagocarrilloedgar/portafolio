import React, { useState, useEffect, createContext } from "react";
import { setJWT, localSDB } from "utils";

export const OpenContext = createContext();

export function OpenContextProvider(props) {
  const [open, setValue] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [viewTags, setViewTags] = useState(false);
  const [openDrawer, setDrawer] = useState(false);
  const [openContact, setContact] = useState(false);
  const [mainDialogOpen, setMain] = useState(false);

  useEffect(() => {
    setJWT("open", open);
  }, [open]);

  const setOpen = () => {
    setValue((prev) => !prev);

    console.log(open);
  };
  const setClose = () => {
    setValue(false);
  };
  const handlePrivacy = (event) => {
    setPrivacy((prev) => !prev);
  };

  const handleChange = () => {
    setViewTags((prev) => !prev);
  };

  const handleCloseFS = () => {
    setMain(false);
    setJWT(localSDB.firsttime, "true");
  };

  return (
    <OpenContext.Provider
      value={{
        open,
        viewTags,
        privacy,
        openDrawer,
        openContact,
        mainDialogOpen,
        setOpen,
        setClose,
        handlePrivacy,
        handleChange,
        setDrawer,
        setContact,
        setMain,
        handleCloseFS,
      }}
    >
      {props.children}
    </OpenContext.Provider>
  );
}
