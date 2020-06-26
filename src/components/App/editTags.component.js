import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { ProjectContext } from "../../providers/project.provider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function TagsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([]);
  const projectProvider = useContext(ProjectContext);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  useEffect(() => {
    projectProvider.setToAdd({
      ...projectProvider.toAdd,
      tags: chipData.map((data) => data.label),
    });
  }, [chipData]);

  const addTags = (event) => {
    if (chipData.length <= 3 && event.target.value !== "") {
      const newTag = {
        key: chipData.length,
        label: event.target.value,
      };
      setChipData([...chipData, newTag]);
    }
  };

  return (
    <div>
      <Paper elevation={0} component="ul" className={classes.root}>
        {chipData.map((data, index) => {
          let icon;

          return (
            <li key={index}>
              <Chip
                color="transparent"
                icon={icon}
                label={data.label}
                onDelete={handleDelete(data)}
              />
            </li>
          );
        })}
      </Paper>
      <TextField
        type="text"
        type="email"
        fullWidth
        variant="outlined"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Añade hasta 3 tags para identificar tu proyecto"
      />
    </div>
  );
}

export const ViewTagsArray = ({ tags }) => {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([]);
  const projectProvider = useContext(ProjectContext);

  return (
    <Paper elevation={0} component="ul" className={classes.root}>
      {tags.map((tags, index) => {
        let icon;

        return (
          <li key={index}>
            <Chip
              icon={icon}
              label={tags}
              className={classes.chip}
              variant="outlined"
              color="primary"
              size="small"
            />
          </li>
        );
      })}
    </Paper>
  );
};
