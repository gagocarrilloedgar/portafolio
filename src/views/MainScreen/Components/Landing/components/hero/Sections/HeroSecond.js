import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./sections.css";
import { useStyles } from "./style"

import sponsors from "./assets/sponsors.png"
import rocket from "./assets/rocket.png"
import { buttonEventGA } from "utils";


export const HeroSecond = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    const signAction = () => {
        buttonEventGA({ category: "landing", action: "signup", label: "hero2" });
        window.open("https://edgargcupc.typeform.com/to/u3E6v9Hy")
    }


    return (
      <React.Fragment>
        <CssBaseline />
        <div className="background2">
          <Grid container>
            <Grid item sm={12} lg={12}>
              <Typography
                variant="h5"
                style={{
                  familyFont: "Fira, Sans",
                  fontWeight: "600",
                  color: "#3A484A",
                  marginBottom: "50px",
                }}
              >
                {t("landing.hero2.title")}
              </Typography>
              <img src={sponsors} id="sponsors" alt="sponsors" />
              <Grid container>
                <Grid item className={classes.backgroundTop} sm={12} lg={5}>
                  <Typography align="right" variant="h3">
                    {t("landing.hero2.substitle")}
                  </Typography>
                  <Typography
                    variant="h5"
                    align="right"
                    style={{
                      marginTop: "5px",
                      marginBottom: "40px",
                      color: "grey",
                    }}
                  >
                    {t("landing.hero2.explanation")}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => signAction()}
                    style={{
                      paddingRight: "40px",
                      paddingLeft: "40px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      backgroundColor: "#2255ff",
                      fontSize: "20px",
                      color: "white",
                      fontFamily: "Fira Sans",
                      borderRadius: 40,
                    }}
                  >
                    {t("landing.hero2.button")}
                  </Button>
                </Grid>

                <Grid item lg={7}>
                  <img src={rocket} id="rocket" alt="rocket" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        {/*<div className="ellipseFloat3" >
                <img src={Ellipse3} alt="ellipse3" />
                </div>*/}
      </React.Fragment>
    );
}
