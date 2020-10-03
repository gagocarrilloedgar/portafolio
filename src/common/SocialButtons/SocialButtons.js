import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import { CssBaseline, Grid } from '@material-ui/core'
import { useStyles } from "./style.js";
import { buttonEventGA } from 'utils/index.js';

export const SocialButtons = () => {
    const classes = useStyles();
    const facebook = { title: "facebook", url: "https://www.facebook.com/projectportfolio/" };
    const insta = { title: "insta", url: "https://www.instagram.com/pportfol.io" };
    const linkedIn = { title: "linkedIn", url: "https://www.linkedin.com/company/pportfolio" }

    const socialMediaAction = ({ social, url }) => {

        buttonEventGA({category:"social", action:social, label:social});
        window.open(url);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container justify="center" sm={12} lg={12} >
                
                <FacebookIcon onClick={() => socialMediaAction(facebook.title, facebook.url)} className={classes.icon} />

                <InstagramIcon  onClick={() => socialMediaAction(insta.title, insta.url)} className={classes.icon} />

                <LinkedInIcon onClick={() => socialMediaAction(linkedIn.title, linkedIn.url)} className={classes.icon} />

            </Grid>
        </React.Fragment>
    )
}
