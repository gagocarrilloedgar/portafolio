import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./businessStyle.css";
import { useStyles } from "./style"

import sponsors from "../../assets/sponsors.png";
import join from "../../assets/join.png";
import { buttonEventGA, window } from "utils";


export const HeroSecond = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const { toContact } = window();

    const signAction = () => {
        buttonEventGA({ category: "business", action: "contact", label: "hero2" });
        toContact();
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <div className="background1">
                <Grid container >
                    <Grid item sm={12} lg={12}>
                        <Typography
                            variant="h5"
                            style={{
                                familyFont: "Fira, Sans",
                                fontWeight: "600",
                                color: "#3A484A",
                                marginBottom: "50px",
                            }}
                        >
                            {t("business.hero2.title")}
                        </Typography>
                        <img src={sponsors} id="sponsors" alt="sponsors" />
                        <Grid container >
                            <Grid item lg={5} >
                                <img src={join} id="join" alt="join" />
                            </Grid>
                            <Grid item className={classes.backgroundTop} sm={12} lg={5} >
                                <Typography align="right" variant="h3" sytle={{ fontWeight: "700", familyFont: "Fira, Sans", }}>
                                    {t("business.hero2.subtitle")}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    align="right"
                                    style={{ marginTop: "5px", marginBottom: "40px", color: "grey" }}
                                >
                                    {t("business.hero2.description")}
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={() => signAction()}
                                    className="bluebutton"
                                    style={{
                                        paddingRight: "20px",
                                        paddingLeft: "20px",
                                        paddingTop: "10px",
                                        paddingBottom: "10px",
                                        backgroundColor: "#2255ff",
                                        color: "white",
                                        fontFamily: "Fira Sans",
                                        borderRadius: 40,
                                    }}
                                >
                                    {t("business.hero2.button2")}
                                </Button>

                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    )
}

