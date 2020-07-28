import React, { useState, useContext } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Collapse,
  CardActions,
} from "@material-ui/core";
import {
  TypographyH6,
  TypographyBody,
  ButtonOutlined,
  EditProject,
  PremiumButton,
} from "common";
import { useTranslation } from "react-i18next";

import useStyles from "./themes";
import { ProjectContext } from "hooks";

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
          <CardMedia
            className={classes.cardMedia}
            image={card.urlimage}
            title={card.title}
          />
          <CardContent className={classes.cardContent}>
            <TypographyH6 text={card.title} />
            <Collapse in={checked}>
              <TypographyBody text={card.description} />
            </Collapse>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <EditProject value={card} />
          <ButtonOutlined
            title={t("editcard.button.delete")}
            action={deleteProject}
          />
          <ButtonOutlined
            title={t("editcard.button.description")}
            action={handleChange}
          />
          <PremiumButton title={t("editcard.button.premium")} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default EditCard;
