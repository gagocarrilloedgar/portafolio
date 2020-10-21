import React, { useState } from "react";
import { Button, CssBaseline, Grid, TextField, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { useStyles } from "./style"
import { buttonEventGA } from "utils";
import emailjs from "emailjs-com";

import "./businessStyle.css";

export const HeroContact = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    const [formTemplate, setForm] = useState({
        name: "",
        email: "",
        subject: "Business",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let formParameters = {
            from_name: formTemplate.email,
            to_name: formTemplate.name,
            message_html: formTemplate.message,
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

        buttonEventGA({ category: "business", action: "contact", label: "contact" });
        setForm({ email: "" })
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
            <div className="contactHero">
                <form >
                    <Grid container className="contactBox">
                        <Grid item lg={12} sm={12}>
                            <Typography variant="h2">
                                {t("business.contact.title")}
                            </Typography>
                        </Grid>

                        <Grid item sm={12} lg={6} className="contactRow">
                            <Typography variant="h6" align="left">
                                {t("business.contact.name")}
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label={t("business.contact.nameplaceholder")}
                                type="text"
                                id="name"
                                onChange={handleChange("name")}
                            />
                        </Grid>
                        <Grid item sm={12} lg={6} className="contactRow">
                            <Typography variant="h6" align="left">
                                {t("business.contact.email")}
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label={t("business.contact.emailplaceholder")}
                                type="email"
                                id="email"
                                onChange={handleChange("email")}
                            />
                        </Grid>
                        <Grid item lg={12} sm={12} className="contactRow">
                            <Typography variant="h6" align="left" style={{ marginTop: "50px" }}>
                                {t("business.contact.message")}
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                multiline
                                rows={10}
                                fullWidth
                                type="text"
                                id="message"
                                onChange={handleChange("message")}
                            />
                        </Grid>
                        <Grid item >
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                fullWidth
                                type="submit"
                                style={{
                                    marginLeft: "45px",
                                    marginTop: "30px",
                                    backgroundColor: "#2255ff",
                                    fontSize: "16px",
                                    color: "white",
                                    paddingLeft: "20px",
                                    paddingRight: "20px",
                                    fontFamily: "Fira Sans",
                                    borderRadius: 5,
                                }}
                            >
                                {t("business.contact.button")}
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </div>
        </React.Fragment>
    )
}

