import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
  Grid,
} from "@material-ui/core";

import { useStyles } from "./style";
import { ShareButtons, ViewTagsArray, QRProfile, ButtonOutlined } from "common";
import { useContext } from "react";
import { OpenContext, ProjectContext } from "hooks";
import { getJWT, localSDB } from "utils";

export const UserCard = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { viewTags, handleChange } = useContext(OpenContext);
  const { getTags } = useContext(ProjectContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(getJWT(localSDB.userdata));
  }, []);

  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <Card
          raised
          className={classes.card1}
          style={{ marginTop: "30px", marginBottom: 50 }}
        >
          <CardMedia
            className={classes.cardMedia}
            image={user.image}
            title="Image title"
          />
          <CardContent>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              style={{
                fontWeight: "bold",
                margin: 0,
              }}
            >
              {user.username}
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              gutterBottom
              style={{ marginBottom: "10px" }}
            >
              {user.degree}
            </Typography>

            <Typography
              variant="overline"
              textAlign="left"
              style={{ fontWeight: 800, textAlign: "left" }}
            >
              {t("profile.view.contact")}
            </Typography>

            <Typography
              variant="body2"
              align="center"
              gutterBottom
              style={{
                padding: 0,
                marginBottom: "14px",
              }}
            >
              {user.email}
            </Typography>

            <Typography
              variant="overline"
              textAlign="left"
              style={{ fontWeight: 800, textAlign: "left" }}
            >
              {t("profile.view.about")}
            </Typography>

            <Typography
              align="justify"
              gutterBottom
              style={{
                padding: 0,
                marginBottom: "14px",
              }}
            >
              {user.whoAmI}
            </Typography>

            <Typography
              variant="overline"
              textAlign="left"
              style={{ fontWeight: 800, textAlign: "left" }}
            >
              Skills
            </Typography>

            <Collapse in={viewTags} collapsedHeight={100}>
              <ViewTagsArray tags={getTags()} />
            </Collapse>
            <Typography style={{ padding: 5 }}>
              <ButtonOutlined
                action={handleChange}
                title={t("profile.view.buttons.skills")}
              />
            </Typography>

            <Typography
              variant="overline"
              textAlign="left"
              style={{ fontWeight: 800, textAlign: "left" }}
            >
              {t("profile.view.experience")}
            </Typography>
            <Typography
              variant="body2"
              align="justify"
              gutterBottom
              style={{
                padding: 0,
                marginBottom: 14,
              }}
            >
              {user.what}
            </Typography>
            <Typography
              variant="overline"
              textAlign="center"
              style={{ fontWeight: 800, textAlign: "left" }}
            >
              {t("profile.view.contact")}
            </Typography>

            <Typography
              variant="body2"
              align="center"
              gutterBottom
              style={{
                padding: 0,
                marginBottom: 14,
              }}
            >
              {user.university}
              <br></br>
              {user.degree}
            </Typography>

            <Typography
              variant="overline"
              style={{ fontWeight: 800, textAlign: "left" }}
            >
              {t("profile.view.currently")}
            </Typography>

            <Typography
              variant="body2"
              align="justify"
              gutterBottom
              style={{
                padding: 0,
                marginBottom: 14,
              }}
            >
              {user.lookingFor}
            </Typography>
            <Typography
              variant="overline"
              style={{ fontWeight: 800, textAlign: "left" }}
            >
              {t("profile.view.share")}
            </Typography>
            <ShareButtons />
          </CardContent>
          <CardActions align="center">
            <QRProfile url={window.location.href} />
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default UserCard;
