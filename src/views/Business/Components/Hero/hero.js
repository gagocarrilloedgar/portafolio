import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./style.css";
import connect from "../../assets/connect.png";
import { buttonEventGA } from "utils";
import { SocialButtons } from "common/SocialButtons";

export const HeroComponent = () => {
    const { t } = useTranslation();

    const signAction = () => {
        buttonEventGA({ category: "landing", action: "signup", label: "hero1" });
        window.open("https://edgargcupc.typeform.com/to/u3E6v9Hy")
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <div className="background">
                <Grid container justify="space-around">
                    <Grid item sm={12} lg={6}>
                        <Typography
                            variant="h1"
                            style={{
                                marginTop: "20px",
                                familyFont: "Fira, Sans",
                                fontWeight: "800",
                                color: "#3A484A",
                            }}
                        >
                            {t("business.hero.title")}
                        </Typography>
                        <Typography style={{ color: "grey" }} variant="h2">
                            {t("business.hero.subtitle")}
                        </Typography>
                        <Typography
                            variant="h6"
                            style={{ marginTop: "5px", marginBottom: "0px", color: "grey" }}
                        >
                            {t("business.hero.interested")}
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={signAction}
                            className="bluebutton"
                            style={{
                                margin: "20px",
                                backgroundColor: "#2255ff",
                                fontSize: "20px",
                                color: "white",
                                fontFamily: "Fira Sans",
                                borderRadius: 40,
                                alignSelf: "flex-start"
                            }}
                        >
                            {t("business.hero.button")}
                        </Button>

                    </Grid>
                    <Grid item lg={6}>
                        <img id="contact" src={connect} alt="connect" />
                    </Grid>
                </Grid>
            </div>
            <div className="icons" container justify="center" sm={12} lg={12} >
                <SocialButtons />
            </div>
        </React.Fragment>
    );
};

