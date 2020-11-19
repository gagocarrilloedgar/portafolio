import React from "react";
import { HelmetMain, ProjectGrid } from "common";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";
import { Card, CardActionArea, CardContent, CardMedia, Container, CssBaseline, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "../style";
import youtube from "./Assets/youtube.png";
import web from "./Assets/web.png";
import forum from "./Assets/forum.png";
import docs from "./Assets/documentation.png";


export const LearnMain = () => {
    initializeGA();
    pageViewGA({ path: window.location.pathname + window.location.search });
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <HelmetMain title={t("dashboard.helmet.learn")} />
            <ProjectGrid>
                <Grid item lg={6} sm={12} xs={12} align="center">
                    <Card className={classes.learn} raised>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    className={classes.media}
                                    image={youtube}
                                />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={6} sm={12} xs={12} align="center">
                    <Card className={classes.learn} raised>
                        <CardActionArea onClick={()=> window.location="/app/learn/docs"}>
                            <CardContent>
                                <CardMedia
                                    className={classes.media}
                                    image={docs}
                                />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={6} sm={12} xs={12} align="center">
                    <Card className={classes.learn} raised>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    className={classes.media}
                                    image={forum}
                                />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={6} sm={12} xs={12} align="center">
                    <Card className={classes.learn} raised>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    className={classes.media}
                                    image={web}
                                />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </ProjectGrid>
        </React.Fragment>
    );
};
