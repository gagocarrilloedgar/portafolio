import React from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./businessStyle.css";
import looking from "./assets/look-for.png";
import gaming from "./assets/gaming.png";
import profile from "./assets/profile.png";
import team from "./assets/team.png";
import verified from "./assets/verified.png"

export const HeroThird = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className="background2">
                <Grid container >
                    <Grid item lg={12} justify="center" className="firstColumn">
                        <Grid item lg={12}>
                            <Typography align="center" variant="h3" style={{
                                marginTop: "20px",
                                familyFont: "Fira, Sans",
                                fontWeight: "800",
                                color: "#3A484A",
                            }}>

                                {t("business.hero3.title")}
                            </Typography>
                            <Grid container justify="center">
                                <img src={looking} alt="look-for" id="features" />
                                <Typography align="center" style={{ marginTop: "40px" }} varian="h6">
                                    {t("business.hero3.feat1title")}
                                </Typography>
                            </Grid>
                            <Typography variant="h5">
                                {t("business.hero3.feat1sub")}
                            </Typography>
                            <Typography variant="subtitle1" className="mainFeature">
                                {t("business.hero3.feat1desc")}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container align="left" justify="center">
                        <Grid item sm={12} lg={5} className="column">
                            <Grid container justify="left">
                                <img alt="verified" src={verified} id="features" />
                                <Typography varian="h6" style={{ marginTop: "40px" }} >
                                    {t("business.hero3.feat2title")}
                                </Typography>
                            </Grid>

                            <Typography variant="h5">
                                {t("business.hero3.feat2sub")}
                            </Typography>
                            <Typography variant="subtitle1">
                                {t("business.hero3.feat2desc")}
                            </Typography>
                        </Grid>
                        <Grid item lg={5} sm={12} className="column">
                            <Grid container justify="letf">
                                <img alt="gaming" src={gaming} id="features" />
                                <Typography varian="h6" style={{ marginTop: "40px" }} >
                                    {t("business.hero3.feat3title")}
                                </Typography>
                            </Grid>
                            <Typography variant="h5">
                                {t("business.hero3.feat3sub")}
                            </Typography>
                            <Typography variant="subtitle1">
                                {t("business.hero3.feat3desc")}
                            </Typography>
                        </Grid>
                        <Grid item lg={5} sm={12} className="column">
                            <Grid container >
                                <img alt="team" src={team} id="features" />
                                <Typography varian="h6" style={{ marginTop: "40px" }}>
                                    {t("business.hero3.feat4title")}
                                </Typography>
                            </Grid>

                            <Typography variant="h5">
                                {t("business.hero3.feat4sub")}
                            </Typography>
                            <Typography variant="subtitle1">
                                {t("business.hero3.feat4desc")}
                            </Typography>
                        </Grid>
                        <Grid item lg={5} sm={12} className="column">
                            <Grid container className="featuresBox">
                                <img alt="profile" src={profile} id="features" />
                                <Typography varian="h6" style={{ marginTop: "40px" }}>
                                    {t("business.hero3.feat5title")}
                                </Typography>
                            </Grid>
                            <Typography variant="h5">
                                {t("business.hero3.feat5sub")}
                            </Typography>
                            <Typography variant="subtitle1">
                                {t("business.hero3.feat5desc")}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment >
    )
}

