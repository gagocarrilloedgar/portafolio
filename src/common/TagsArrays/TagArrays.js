import React, { useEffect, useContext } from "react";
import { Paper, TextField, Chip } from "@material-ui/core";
import { ProjectContext } from "hooks";
import { theme } from "Themes";
import useStyles from "./theme";

export function TagsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([]);
  const { setToAdd, toAdd } = useContext(ProjectContext);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  useEffect(() => {
    setToAdd({
      ...toAdd,
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

  return (
    <Paper elevation={0} component="ul" className={classes.root}>
      {tags.map((tag, index) => {
        return (
          <li key={index}>
            <Chip
              label={tag}
              className={classes.chip}
              key={index}
              style={theme.palette.blue}
              size="small"
            />
          </li>
        );
      })}
    </Paper>
  );
};
