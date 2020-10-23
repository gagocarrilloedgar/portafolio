import React, { useState } from "react";
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
  ViewTagsArray,
} from "common";
import { useTranslation } from "react-i18next";

import useStyles from "./themes";
import { ButtonProject } from "./Components";
import { ButtonTextBlack } from "common/buttons";

const TextCard = ({ card }) => {
  const [checked, setChecked] = useState(false);

  const classes = useStyles();
  const { t } = useTranslation();

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Grid item>
      <Card className={classes.card} raised>
        <CardActionArea onClick={handleChange}>
          <CardContent className={classes.cardContent}>
            <TypographyH6 text={card.title} />
            <Collapse in={checked} collapsedHeight="75px">
              <TypographyBody text={card.description} />
            </Collapse>
            <ViewTagsArray tags={card.tags} />
          </CardContent>
        </CardActionArea>
        <Divider style={{ margin: "10px" }} />
        <CardActions>
          <ButtonProject url={card.projecturl} />
          <ButtonTextBlack
            title={t("infocard.button.description")}
            action={handleChange}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default TextCard;
