import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./sections.css";
import contact from "./assets/contact.png";
import { useStyles } from "./style";
import Ellipse4 from "./assets/Ellipse13.png";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

export const HeroFourth = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />

            <div className="backgroundFourth">

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
                            onClick={() =>
                                window.open("https://edgargcupc.typeform.com/to/u3E6v9Hy")
                            }
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
                    <Grid container justify="center" sm={12} lg={12} >
                        <a margin="10px" href="https://www.facebook.com/projectportfolio/">
                            <FacebookIcon style={{ color: "#2255ff", fontSize: "40px" }} />
                        </a>
                        <a margin="10px" href="https://www.instagram.com/pportfol.io">
                            <InstagramIcon style={{ color: "#2255ff", fontSize: "40px" }} />
                        </a>
                        <a margin="10px" href="https://www.linkedin.com/company/pportfolio">
                            <LinkedInIcon style={{ color: "#2255ff", fontSize: "40px" }} />
                        </a>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    )
}

