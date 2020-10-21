import React, { useState } from "react";
import { Button, CssBaseline, Grid, TextField, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./businessStyle.css";
import connect from "../../assets/connect.png";
import { buttonEventGA } from "utils";
import { SocialButtons } from "common/SocialButtons";
import { HeroSecond } from "./hero2";
import { HeroThird } from "./hero3";
import { HeroFourth } from "./hero4";
import { HeroContact } from "./contact";
import emailjs from "emailjs-com";
import { useStyles } from "./style";


export const HeroComponent = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [formTemplate, setForm] = useState({
        subject: "BusinessSubscriber",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let formParameters = {
            from_name: formTemplate.email,
        };

        emailjs
            .send(
                "businesspportfolio",
                "template_4x3fmgV4",
                formParameters,
                "user_9iXWknkRZxYbm42EanlCo"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        alert(
            t("business.contact.success")
        );

        buttonEventGA({ category: "business", action: "subscribe", label: "hero1" });
        resetForm();
    };

    const resetForm = () => {
        setForm({
            email: "",
            subject: "Business",
        });
    };

    const handleChange = (prop) => (event) => {
        setForm({
            ...formTemplate,
            [prop]: event.target.value,
        });
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <div className="backgroundB">
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

                        <Grid item align="left">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                className="contactbutton"
                                label={t("business.contact.emailplaceholder")}
                                type="email"
                                id="email"
                                onChange={handleChange("email")} />
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                className="bluebutton"
                                style={{
                                    margin: "20px",
                                    backgroundColor: "#2255ff",
                                    fontSize: "20px",
                                    color: "white",
                                    fontFamily: "Fira Sans",
                                    borderRadius: 5,
                                    alignSelf: "flex-start"
                                }}
                            >
                                {t("business.hero.button")}
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <img id="contact" src={connect} alt="connect" />
                    </Grid>
                </Grid>
            </div>
            <div className="icons" container justify="center" sm={12} lg={12} >
                <SocialButtons />
            </div>
            <HeroSecond />
            <HeroThird />
            <HeroFourth />
            <HeroContact />
            <SocialButtons />
        </React.Fragment>
    );
};

