import React from "react";
import { ProjectContext } from "../../providers/project.provider";
import { useContext } from "react";
import { useState } from "react";
import { Paper, InputBase } from "@material-ui/core";
import Search from "@material-ui/icons/SearchOutlined";

export const SearchBarProjects = () => {
  const projectProvider = useContext(ProjectContext);
  const [tag, setTag] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    projectProvider.getProjectByTag(tag);
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
      }}
    >
      <form onSubmit={onSubmit}>
        <InputBase
          fullWidth
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Palabra clave de los proyectos que te interesen"
          style={{
            paddingRight: "10px",
            paddingLeft: "10px",
            fontFamily: `"Montserrat",sans-serif`,
            fontSize: "15px",
          }}
          endAdornment={<Search />}
        />
      </form>
    </Paper>
  );
};
