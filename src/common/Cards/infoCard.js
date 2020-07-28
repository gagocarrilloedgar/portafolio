import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Collapse,
  CardActions,
} from "@material-ui/core";
import { routerMain, window } from "utils";
import {
  ButtonOutlined,
  TypographyH6,
  TypographyBody,
  ViewTagsArray,
} from "common";

import CardHeaderInfo from "./cardHeader";
import useStyles from "./themes";
import { useTranslation } from "react-i18next";
import { ButtonProject } from "./Components";

const InfoCard = ({ card }) => {
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState({});
  const { toUserView } = window();

  const { t } = useTranslation();

  const classes = useStyles();

  useEffect(() => {
    axios
      .get(routerMain.userRouter.findUser + card.userId)
      .then((user) => setUser(user.data))
      .catch((err) => console.log(err));
  });

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardHeaderInfo
          image={user.image}
          title={user.username}
          toClick={toUserView}
          subheader={user.degree}
        />
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
            <ViewTagsArray tags={card.tags} />
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

export default InfoCard;
