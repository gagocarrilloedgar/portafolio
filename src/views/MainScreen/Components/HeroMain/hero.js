import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import "./MainStyle.css";

export const HeroMain = () => {

    const lastSegment = window.location.href.split("/").pop();
    const [title, setTitle] = useState("");
    const [headerTitle, setHeader] = useState("");

    useEffect(() => {
        if (lastSegment === "business") {
            setTitle("SOY TALENTO");
            setHeader("La fiebre gaming ha llegado a los procesos de selección");

        } else {
            setTitle("SOY EMPRESA");
            setHeader("Tú pones el talento, nosotros las ofertas de empleo");
        }
    }, []);

    const handleChange = () => {
        if (lastSegment === "business") {
            window.location = "/index"
        } else {
            window.location = "/index/business"
        }
    }

    return (

        <div className="backgroundMain" >
            <Container>
                <Grid item sm={12} lg={12}>
                    <h1>
                        {headerTitle}
                    </h1>
                    <h5>
                        {"Pportfolio es una nueva plataforma de contratación que a través de la gamificación revoluciona la forma en la que se encuentra trabajo y se progresa profesionalmente en el sector tecnológico"}
                    </h5>
                </Grid>
                <div className="inputBox">
                    <form>
                        <input type="email" placeholder="Tu correo electrónico va aquí" />
                        <input type="submit" />
                    </form>
                </div>
                <div className="userType">
                    <p>{" ESPERA UN MOMENTO"}</p>
                    <button className="buttonMain" onClick={handleChange}>
                        {title}
                    </button>
                </div>
            </Container>
        </div >

    );
};

