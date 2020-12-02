import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./MainStyle.css";
import { ButtonContained } from "common";

export const HeroMain = () => {


    return (

        <div className="backgroundMain" >
            <Container>
                <Grid item sm={12} lg={12}>
                    <h1>
                        {"Tú pones el talento, nosotros las ofertas de empleo"}
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
                    <p>
                        {" Espera un momento"}
                    </p>
                    <ButtonContained title="sdf"/>
                </div>
            </Container>
        </div>

    );
};

