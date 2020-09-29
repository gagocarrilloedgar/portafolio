import React from "react";
import { Button, Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./sections.css";
import web from "./assets/dato.png"
import mkt from "./assets/megafono1.png"
import dato from "./assets/ciencias.png"
//import junior from "./assets/junior.png"
import student from "./assets/programa1.png"
import senior from "./assets/premio1.png"
import pro from "./assets/trofeo.png"
import { useStyles } from "./style"

export const HeroThird = () => {
    const { t } = useTranslation();
    const classes = useStyles()
    return (
        <React.Fragment>
            <CssBaseline />
            <div className="backgroundThird">
                <Grid container >
                    <Grid lg={12} sm={12} item justify="center">
                        <Typography
                            variant="h4"
                            style={{
                                familyFont: "Fira, Sans",
                                fontWeight: "700",
                            }}
                        >
                            {t("landing.hero3.title")}
                        </Typography>
                        <Typography
                            variant="h6"
                            style={{
                                familyFont: "Fira, Sans",
                                color: "#3A484A",
                            }}
                        >
                            {t("landing.hero3.subtitle")}
                        </Typography>


                    </Grid>
                    <Grid container align="left">
                        <Grid item sm={12} lg={12} >
                            <Typography

                                variant="h4"
                                style={{
                                    marginTop: "50px",
                                    familyFont: "Fira, Sans",
                                    fontWeight: "700",
                                }}
                            >
                                {t("landing.hero3.whatTitle")}
                            </Typography>
                            <Typography
                                variant="h6"
                                style={{ marginBottom: "50px" }}>
                                {t("landing.hero3.whatSub")}
                            </Typography>
                        </Grid>
                        <Grid item lg={6} sm={12}>

                            <Typography
                                variant="h4"
                                style={{
                                    familyFont: "Fira, Sans",
                                    fontWeight: "700",
                                }}
                            >
                                {t("landing.hero3.step1Title")}
                            </Typography>
                            <Typography
                                variant="h6"
                                style={{
                                    familyFont: "Fira, Sans",
                                    marginRight: "50px"
                                }}
                            >
                                {t("landing.hero3.step1subtitle")}
                            </Typography>
                            <Grid container style={{ marginTop: "20px" }} justify="space-evenly">
                                <Grid item lg={2} sm={4}>
                                    <img src={dato} width="60%" alt="data" />
                                    <Typography style={{ marginLeft: "-80px" }}>Data Science</Typography>
                                </Grid>
                                <Grid item lg={2} sm={4}>
                                    <img src={mkt} width="60%" alt="MKT" />
                                    <Typography style={{ marginLeft: "-40px" }}>Digital marketing</Typography>
                                </Grid>
                                <Grid item lg={2} sm={4}>
                                    <img src={web} width="60%" alt="devs" />
                                    <Typography style={{ marginLeft: "-40px" }}>Web development</Typography>
                                </Grid>
                            </Grid>
                            <Typography align="center" variant="h6" className={classes.options}>{t("landing.hero3.options")}</Typography>
                        </Grid>

                        <Grid item lg={6} sm={12}>
                            <Typography
                                variant="h4"
                                style={{
                                    familyFont: "Fira, Sans",
                                    fontWeight: "700",
                                }}
                            >
                                {t("landing.hero3.step2Title")}
                            </Typography>
                            <Typography
                                variant="h6"
                                style={{
                                    familyFont: "Fira, Sans",
                                    marginRight: "50px"
                                }}
                            >
                                {t("landing.hero3.step2subtitle")}
                            </Typography>
                            <Grid container style={{ marginTop: "50px" }} justify="space-evenly">
                                <Grid item lg={2} sm={4}>
                                    <img src={student} width="60%" alt="data" />
                                    <Typography style={{ marginLeft: "-60px" }}>Student</Typography>
                                </Grid>
                                <Grid item lg={2} sm={4}>
                                    <img src={senior} width="60%" alt="MKT" />
                                    <Typography style={{ marginLeft: "-60px" }}>Junior</Typography>
                                </Grid>
                                <Grid item lg={2} sm={4}>
                                    <img src={pro} width="60%" alt="devs" />
                                    <Typography style={{ marginLeft: "-60px" }}>Senior</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid className={classes.secondRow} item lg={4} sm={12}>
                            <Typography
                                variant="h4"
                                style={{
                                    familyFont: "Fira, Sans",
                                    fontWeight: "700",
                                }}
                            >
                                {t("landing.hero3.step3Title")}
                            </Typography>
                            <Typography
                                variant="h6"
                                style={{
                                    familyFont: "Fira, Sans",
                                    marginRight: "50px"
                                }}
                            >
                                {t("landing.hero3.step3subtitle")}
                            </Typography>
                        </Grid>

                        <Grid className={classes.secondRow} item lg={4} sm={12}>
                            <Typography
                                variant="h4"
                                style={{
                                    familyFont: "Fira, Sans",
                                    fontWeight: "700",
                                }}
                            >
                                {t("landing.hero3.step4Title")}
                            </Typography>
                            <Typography
                                variant="h6"
                                style={{
                                    familyFont: "Fira, Sans",
                                    marginRight: "50px"
                                }}
                            >
                                {t("landing.hero3.step4subtitle")}
                            </Typography>
                        </Grid>

                        <Grid className={classes.secondRow} item lg={4} sm={12}>
                            <Typography
                                variant="h4"
                                style={{
                                    familyFont: "Fira, Sans",
                                    fontWeight: "700",
                                }}
                            >
                                {t("landing.hero3.step5Title")}
                            </Typography>
                            <Typography
                                variant="h6"
                                style={{
                                    familyFont: "Fira, Sans",
                                    marginRight: "50px"
                                }}
                            >
                                {t("landing.hero3.step5subtitle")}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}

