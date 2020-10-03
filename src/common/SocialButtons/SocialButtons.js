import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import { CssBaseline, Grid, IconButton } from '@material-ui/core'
import { useStyles } from "./style.js";
import { buttonEventGA } from 'utils/index.js';

export const SocialButtons = () => {
    const classes = useStyles();
    const facebook = { title: "facebook", url: "https://www.facebook.com/projectportfolio/" };
    const insta = { title: "insta", url: "https://www.instagram.com/pportfol.io" };
    const linkedIn = { title: "linkedIn", url: "https://www.linkedin.com/company/pportfolio" }

    const socialMediaAction = ({ social, url }) => {

        buttonEventGA({ category: "social", action: social, label: social });
        window.open(url, "blank");
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container justify="center" sm={12} lg={12} >

                <IconButton
                    onClick={() => socialMediaAction({ title: facebook.title, url: facebook.url })}
                    children={<FacebookIcon className={classes.icon} />}
                >
                </IconButton>
                <IconButton
                    onClick={() => socialMediaAction({ title: insta.title, url: insta.url })}
                    children={<InstagramIcon className={classes.icon} />}
                >
                </IconButton>
                <IconButton
                    onClick={() => socialMediaAction({ title: linkedIn.title, url: linkedIn.url })}
                    children={<LinkedInIcon className={classes.icon} />} >
                </IconButton>

            </Grid>
        </React.Fragment>
    )
}
