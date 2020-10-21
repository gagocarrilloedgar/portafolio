import React from 'react'

import { Card, CardActions, CardContent, CardMedia, CssBaseline, makeStyles } from '@material-ui/core'
import "./style.css"
import { ButtonContained } from 'common';

const useStyles = makeStyles(() => ({
    media: {
        paddingTop: "50%",

    },
    card: {
        background: "white",
        borderRadius: "10px",
        boxShadow: 'rgba(130, 155, 236, 0.15) 2px 4px 20px'

    }
}));


export const HomeCard = ({ source, text, action, title }) => {
    const classes = useStyles();


    return (
        <React.Fragment>
            <CssBaseline />
            <Card className={classes.card} lg={4}>
                <CardMedia
                    className={classes.media}
                    image={source} />
                <CardContent>
                    {text}
                </CardContent>
                <CardActions>
                    <ButtonContained action={action} title={title} />
                </CardActions>
            </Card>
        </React.Fragment>
    )
}
