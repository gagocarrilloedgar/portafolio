import { Button, Grid } from '@material-ui/core';
import { ProjectGrid } from 'common';
import React from 'react'

import { Route, Switch } from "react-router-dom";
import { RetosWeb } from './Components';

// FUTURE IMPLEMENTATION --> https://www.npmjs.com/package/react-horizontal-scrolling-menu
export const Retos = () => {
    return (
        <React.Fragment>
            <Grid style={{marginBottom:"-100px"}}>
                <ProjectGrid>
                    <Grid item lg={3}>
                        <Button fullWidth color="primary" variant="contained">
                            {"Desarrollo web"}
                        </Button>
                    </Grid>
                    <Grid item lg={3}>
                        <Button fullWidth variant="contained">
                            {"Programación funcional"}
                        </Button>
                    </Grid>
                    <Grid item lg={3}>
                        <Button fullWidth variant="contained">
                            {"Data science"}
                        </Button>
                    </Grid>
                    <Grid item lg={3}>
                        <Button fullWidth variant="contained">
                            {"Real world skills"}
                        </Button>
                    </Grid>
                </ProjectGrid>
            </Grid>
            <Switch>
                <Route path="/app/retos/web" component={RetosWeb} />
                <Route path="/app/retos" component={RetosWeb} />
            </Switch>
        </React.Fragment >
    )
}
