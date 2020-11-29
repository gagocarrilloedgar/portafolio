import React, { useState, useContext } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Collapse,
  CardActions,
  Divider,
} from "@material-ui/core";
import {
  TypographyH6,
  TypographyBody,
  EditProject,
  ViewTagsArray,
} from "common";
import { useTranslation } from "react-i18next";

import useStyles from "./themes";
import { ProjectContext } from "hooks";
import { ButtonTextBlack } from "common/buttons";

const EditCard = ({ card }) => {
  const [checked, setChecked] = useState(false);
  const { deleteProjectById } = useContext(ProjectContext);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const deleteProject = () => {
    deleteProjectById(card._id);
  };

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardActionArea onClick={handleChange}>
          <CardContent className={classes.cardContent}>
            <TypographyH6 text={card.title} />
            <Collapse in={checked} collapsedHeight="57px">
              <TypographyBody text={card.description} />
            </Collapse>
            <ViewTagsArray tags={card.tags} />
          </CardContent>
        </CardActionArea>
        <Divider style={{ margin: "10px" }} />
        <CardActions className={classes.cardActions}>
          <Grid container>
            <Grid xs={12} sm={3} md={3} lg={3} xl={3}>
              <EditProject value={card} />
            </Grid>

            <Grid xs={12} sm={3} md={3} lg={3} xl={3}>
              <ButtonTextBlack
                title={t("editcard.button.delete")}
                action={deleteProject}
              />
            </Grid>

            <Grid xs={12} sm={3} md={3} lg={3} xl={3}>
              {" "}
              <ButtonTextBlack
                title={t("editcard.button.description")}
                action={handleChange}
              />
            </Grid>

            <Grid xs={12} sm={3} md={3} lg={3} xl={3}>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default EditCard;
