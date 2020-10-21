import React from "react";

import { Button, CssBaseline, Grid, Typography } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import contact from "../../assets/FAQ.png";
import { useStyles } from "./style";
import "./businessStyle.css";

import { buttonEventGA, window } from "utils";

export const HeroFourth = () => {

    const { t } = useTranslation();
    const classes = useStyles();
    const { toContact } = window();

    const signAction = () => {
        buttonEventGA({ category: "business", action: "contact", label: "hero4" });
        toContact();
    }

    return (
        <React.Fragment>
            <CssBaseline />

            <div className="background4">

                <Grid container >
                    <Grid lg={7} sm={12} item>
                        <img src={contact} id="contact" alt="contact" />
                    </Grid>
                    <Grid item className={classes.contact} lg={5} sm={12}  >
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
                            onClick={() => signAction()}
                            className="bluebutton"
                            style={{
                                paddingRight: "20px",
                                paddingLeft: "20px",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                backgroundColor: "#2255ff",
                                marginTop: "20px",
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

