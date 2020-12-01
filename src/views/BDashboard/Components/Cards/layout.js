import React from 'react'
import { CssBaseline, Grid, Paper, Typography, Divider } from '@material-ui/core'
import { ButtonOutlinedWhite } from 'common'

export const BCardLayout = ({ icon, title, description, action, color }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Paper elevation={2} style={{ borderRadius: "10px" }}>
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
                <Typography  variant="subtitle2" style={{padding:"15px"}}>
                    {description}
                </Typography>
                <Divider variant="middle" />
                <br />
                <Grid item style={{ backgroundColor: color, borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px" }} >
                    <Grid container >
                        <Grid item >
                            <ButtonOutlinedWhite title="Ver sección" action={action} />
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}
