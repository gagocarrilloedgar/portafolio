import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, CssBaseline, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./MainStyle.css";
import connect from "./assets/connect.png";
import { buttonEventGA, window } from "utils";

import emailjs from "emailjs-com";
import { ButtonContained } from "common";


export const HeroMain = () => {
    const { t } = useTranslation();
    const [formTemplate, setForm] = useState({
        subject: "BusinessSubscriber",
        email: "",
        name:"",
    });

    const { toUserLanding, toBusiness } = window();

    const handleSubmit = (e) => {
        e.preventDefault();
        let formParameters = {
            from_email: formTemplate.email,
            from_name: formTemplate.name,
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

        buttonEventGA({ category: "main", action: "beta", label: "hero" });
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

    const toUser = () => {
        buttonEventGA({ category: "user", action: "goTo", label: "main" });
        toUserLanding();
    }

    const toBuss = () => {
        buttonEventGA({ category: "business", action: "goTo", label: "main" });
        toBusiness();
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <div className="backgroundMain">
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
                            {"Las habilidades demuestran lo que el curriculum no puede"}
                        </Typography>
                        <Grid container className="types">
                            <Grid item lg={6} xs={12} >
                                <Card style={{ height: "340px", width: "310px", marginBottom:"10px"}}>
                                    <CardContent>
                                        <Typography variant="h5" align="center" style={{fontWeight:600, color:"#2255ff"}}>
                                            {"Talento digital"}
                                            <br />
                                            <br />
                                        </Typography>
                                        <Typography variant="h6" align="center"  style={{fontWeight:500, color:"grey"}}>
                                            {"Comunidad y retos"}
                                            <br />
                                        </Typography>
                                        <Typography variant="body" component="p" align="justify">
                                            {"Practica todo tipo de lenguajes y herramientas del sector digital, aprende, compite y comparte con la comidad y deja que nosostros nos encargemos de encontrarte el trabajo que te mereces."}
                                        </Typography>
                                    </CardContent>

                                    <CardActions>
                                        <ButtonContained action={toUser} title={"Quiero saber más"} />
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item lg={6} xs={12} >
                                <Card style={{ height: "340px", width: "310px" }}>
                                    <CardContent>
                                        <Typography align="center" variant="h5" style={{fontWeight:600, color:"#2255ff"}}>
                                            {"Para empresas"}
                                            <br />
                                            <br />
                                        </Typography>
                                        <Typography variant="h6" style={{fontWeight:500, color:"grey"}}>
                                            {"Competiciones y ScapeRooms"}
                                            <br />
                                        </Typography>
                                        <Typography variant="body" component="p" align="justify">
                                            {"Crea hackatones y competiciones y  une a miles de personas del sector dital para resolver retos del mundo real y atrae al mejor talento"}
                                            <br />
                                            <br />
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <ButtonContained action={toBuss} title={"Quiero saber más"} />
                                    </CardActions>
                                </Card>
                            </Grid>

                        </Grid>


                    </Grid>
                    <Grid item lg={6} justify="center">
                        <img id="contact" src={connect} alt="connect" />
                    </Grid>
                </Grid>
            </div>
            <Grid item align="center">
            <TextField
                    variant="outlined"
                    margin="normal"
                    className="contactbutton"
                    style={{marginRight:"10px"}}
                    label={"Nombre o empresa"}
                    type="name"
                    id="name"
                    onChange={handleChange("name")} />
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
        </React.Fragment>
    );
};

