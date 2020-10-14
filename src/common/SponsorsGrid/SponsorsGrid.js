import React from 'react'
import { Button, Grid, Paper } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import terrassa from "./Assets/AjuntamentTerrassa.jpg";
import orbital from "./Assets/orbital.jpg";
import mutua from "./Assets/MutuaDelsEnginyers.jpg";
import empren from "./Assets/LogoEmpren2.png";
import upc from "./Assets/Logo UPC.jpg";
import apps from "./Assets/logo_apps_implantadores2.png";// requires a loader
import bcnjove from "./Assets/BCNJove.jpg";// requires a loader
import accel from "./Assets/Accel&Grow.png";// requires a loader
import innova from "./Assets/InnovaExperts.PNG";// requires a loader



export const SponsorsGrid = () => {
    return (
        <React.Fragment>
            <Grid container justify="center">

                <Grid item  lg={2}>
                    <Paper elevation={3} style={{ margin: "10px", height: "120px" }}>
                        <Button onClick={() => window.open("https://www.terrassa.cat/", "blank")} >
                            <img style={{ marginTop: "25px" }} src={terrassa} alt="terrassa" width="50%" />
                        </Button>
                    </Paper>
                </Grid>

                <Grid item lg={2}>
                    <Paper elevation={3} style={{ margin: "10px", height: "120px" }}>
                        <Button onClick={() => window.open("https://www.mutua-enginyers.com/", "blank")} >
                            <img src={mutua} style={{ marginTop: "30px" }} alt="mutua" width="40%" />
                        </Button>
                    </Paper>
                </Grid>

                <Grid item lg={2}>
                    <Paper elevation={3} style={{ margin: "10px", height: "120px" }}>
                        <Button onClick={() => window.open("https://www.upc.edu/emprenupc/ca/terrassa", "blank")} >
                            <img src={empren} style={{ marginTop: "10px" }} alt="terrassa" width="25%" />
                        </Button>
                    </Paper>
                </Grid>

                <Grid item lg={2}>
                    <Paper elevation={3} style={{ margin: "10px", height: "120px" }}>
                        <Button onClick={() => window.open("https://ajuntament.barcelona.cat/joves/cat", "blank")} >
                            <img src={bcnjove} alt="bcnjove" style={{ marginTop: "10px" }} width="25%" />
                        </Button>
                    </Paper>
                </Grid>

                <Grid item lg={2}>
                    <Paper elevation={3} style={{ margin: "10px", height: "120px" }}>
                        <Button onClick={() => window.open("https://appsimplantadores.com/", "blank")} >
                            <img src={apps} style={{ marginTop: "30px" }} alt="apps" width="50%" />
                        </Button>
                    </Paper>
                </Grid>
                <Grid item lg={2} >
                    <Paper elevation={3} style={{ margin: "10px", height: "120px" }}>
                        <Button onClick={() => window.open("https://www.upc.edu/", "blank")} >
                            <img style={{ marginTop: "20px" }} src={upc} alt="upc" width="50%" />
                        </Button>
                    </Paper>
                </Grid>
                <Grid item lg={2} >
                    <Paper elevation={3} style={{ margin: "10px", height: "120px" }}>
                        <Button fullWidth onClick={() => window.open("https://orbital40.com/", "blank")} >
                            <img style={{ marginTop: "40px" }} src={orbital} alt="orbital" width="60%" />
                        </Button>
                    </Paper>
                </Grid>
                <Grid item lg={2} justify="center">
                    <Paper elevation={3} style={{ margin: "10px", height: "120px" }}>
                        <Button fullWidth onClick={() => window.open("https://www.accelgrow.com/", "blank")} >
                            <img src={accel} alt="innova" width="35%" style={{ marginTop: "10px" }} />
                        </Button>
                    </Paper>
                </Grid>
                <Grid item lg={2} justify="center">
                    <Paper elevation={3} style={{ margin: "10px", height: "120px" }}>
                        <Button fullWidth onClick={() => window.open("http://www.innovaexperts.com/", "blank")} >
                            <img src={innova} style={{ marginTop: "20px" }} alt="innova" width="50%" />
                        </Button>
                    </Paper>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}
