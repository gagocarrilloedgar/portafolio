import React, { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Collapse,
  CardActions,
} from "@material-ui/core";
import { TypographyH6, TypographyBody, ButtonOutlined } from "common";
import { useTranslation } from "react-i18next";

import useStyles from "./themes";
import { ButtonProject } from "./Components";

const ViewCard = ({ card }) => {
  const [checked, setChecked] = useState(false);

  const classes = useStyles();
  const { t } = useTranslation();

  const handleChange = () => {
    setChecked((prev) => !prev);
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
          <ButtonProject url={card.projecturl} />
          <ButtonOutlined
            title={t("infocard.button.description")}
            action={handleChange}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ViewCard;
