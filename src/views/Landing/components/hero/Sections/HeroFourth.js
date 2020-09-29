import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./sections.css";
import contact from "./assets/contact.png";
import {useStyles} from "./style";

export const HeroFourth = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <div className="backgroundFourth">
                <Grid container >
                    <Grid lg={6} sm={12} item>
                        <img src={contact} id="contact" alt="contact" />
                    </Grid>
                    <Grid item className={classes.contact} lg={6} sm={12}  >
                        <Typography
                            align="left"
                            variant="h4"
                            style={{
                                familyFont: "Fira, Sans",
                                fontWeight: "700",
                            }}
                        >
                            {t("landing.hero4.title")}
                        </Typography>

                        <Button
                            variant="contained"
                            onClick={() =>
                                window.open("https://edgargcupc.typeform.com/to/u3E6v9Hy")
                            }
                            className="bluebutton"
                            style={{
                                margin: "20px",
                                backgroundColor: "#2255ff",
                                fontSize: "20px",
                                color: "white",
                                fontFamily: "Fira Sans",
                                borderRadius: 40,
                            }}
                        >
                            {t("landing.hero4.button")}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}

