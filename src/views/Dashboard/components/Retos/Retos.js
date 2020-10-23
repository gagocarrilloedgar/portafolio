import React from 'react'

import {  ProjectGrid } from 'common';
import {  CssBaseline, Grid, Typography } from "@material-ui/core";
import html_source from "./Assets/html.png";
import js_img from "./Assets/js.png";
import data_img from "./Assets/comparticion-de-archivos.png";
import react_img from "./Assets/react.png";
import node_img from "./Assets/node.png";
import "./style.css";
import { CardLayout } from '../Cards';
import { useStyles } from "./style";


// FUTURE IMPLEMENTATION --> https://www.npmjs.com/package/react-horizontal-scrolling-menu
export const Retos = () => {

    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <ProjectGrid>
                <Grid item lg={12} sm={12} sx={12}>
                    <Typography className={classes.retosheaders}>
                        {"RESPONSIVE WEB"}
                    </Typography>

                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <CardLayout icon={html_source}
                        title={"Desarollo web 101: HTML"}
                        description={"Conceptos básicos sobre lel desarrollo y la programación basada en HTML."}
                        color={"#2255ff"}
                        points={"50"} />
                </Grid>
                <Grid item lg={12} sm={12} sx={12}>
                    <Typography className={classes.retosheaders}>
                        {"JS Y ESTRUCTURAS DE DATOS"}
                    </Typography>
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <CardLayout icon={js_img}
                        title={"Java Script básiico y ES6"}
                        description={"Conceptos básicos sobre la programación en JS y ES6."}
                        color={"#f5a125"}
                        points={"50"} />
                </Grid>
                <Grid item lg={12} sm={12} sx={12}>
                    <Typography className={classes.retosheaders}>
                        {"FRAMEWORKS Y LIBRERIAS"}
                    </Typography>

                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <CardLayout icon={react_img}
                        title={"React.JS"}
                        description={"Lo básico del framework más popular de programación web"}
                        color={"#2f2e41"}
                        points={"50"} />
                </Grid>
                <Grid item lg={12} sm={12} sx={12}>
                    <Typography className={classes.retosheaders}>
                        {"VISUALIZACIÓN Y DATOS"}
                    </Typography>

                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <CardLayout icon={data_img}
                        title={"Visualización de datos"}
                        description={"Conecptos básicos sobre la representación ordenada de datos"}
                        color={"#ae99c2"}
                        points={"50"} />
                </Grid>
                <Grid item lg={12} sm={12} sx={12}>
                    <Typography className={classes.retosheaders}>
                        {"MICROSERVICIOS Y DATOS"}
                    </Typography>

                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <CardLayout icon={node_img}
                        title={"Introducción a Node.JS y Express"}
                        description={"Node.Js, primera API en local y conceptos básicos."}
                        color={"#bbe099"}
                        points={"50"} />
                </Grid>
            </ProjectGrid>

        </React.Fragment >
    )
}
