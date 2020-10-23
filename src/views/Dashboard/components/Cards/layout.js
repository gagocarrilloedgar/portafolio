import React from 'react'
import { CssBaseline, Grid, Paper, Typography, Divider, CardActionArea, Avatar } from '@material-ui/core'

export const CardLayout = ({ icon, title, description, current, points, color }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <CardActionArea>
                <Paper elevation={2} style={{borderRadius:"10px"}}>
                    <Grid container style={{ padding: "10px" }}>
                        <Grid item lg={4}>
                            <img src={icon} width="100px" alt="html_source" />
                        </Grid>
                        <Grid item lg={1} />
                        <Grid item lg={7}>
                            <Typography align="left" variant="h5">
                                {title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography >
                        {description}
                    </Typography>
                    <Divider variant="middle" />
                    <br />
                    <Grid item style={{ backgroundColor: color,borderBottomRightRadius:"10px", borderBottomLeftRadius:"10px"}} >
                        <Grid container >
                            <Grid item>
                                <Typography style={{ color: "#ffff" }} variant="body2">
                                    {"Líder de la semana"}
                                </Typography>
                                <Typography>
                                    <Avatar style={{marginTop:"-35px",width:"35px",height:"35px"}}/>
                                </Typography>

                            </Grid>:
                            <Grid item >
                                <Typography align="right" variant="body2" style={{ color: "#ffff" }}>
                                    {"Puntos"}
                                </Typography>
                                <Typography style={{ color: "#ffff", fontWeight: "600", fontSize: "30px", marginTop: "-35px", marginBottom: "-20px" }}>
                                    {points}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </CardActionArea>
        </React.Fragment>
    )
}
