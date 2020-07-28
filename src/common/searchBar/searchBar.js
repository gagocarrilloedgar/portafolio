import React, { useState, useContext } from "react";
import { ProjectContext } from "hooks";
import { Paper, InputBase } from "@material-ui/core";
import Search from "@material-ui/icons/SearchOutlined";
import { useTranslation } from "react-i18next";
import { localSDB, setJWT } from "utils";

const SearchBarProjects = () => {
  const { getProjectByTag } = useContext(ProjectContext);
  const [tag, setTag] = useState("");
  const { t } = useTranslation();

  const onSubmit = (e) => {
    e.preventDefault();
    getProjectByTag(tag);
    setJWT(localSDB.tag, tag);
  };

  return (
    <Paper
      variant="outlined"
      fullWidth
      style={{
        width: "500px",
        height: "100%",
        justifySelf: "left",
        marginBottom: "5px",
        marginTop: "15px",
      }}
    >
      <form onSubmit={onSubmit}>
        <InputBase
          fullWidth
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder={t("landing.searchBar.placeholder")}
          style={{
            paddingRight: "10px",
            paddingLeft: "10px",
            fontSize: "15px",
          }}
          endAdornment={<Search />}
        />
      </form>
    </Paper>
  );
};

export default SearchBarProjects;
