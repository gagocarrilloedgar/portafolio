import React from "react";
import { HelmetMain } from "common";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";
import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import useStyles from "../style";

export const LearnChannels= () => {
	initializeGA();
	pageViewGA({ path: window.location.pathname + window.location.search });
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<HelmetMain title={t("dashboard.helmet.learn")} />
			<Container maxWidth="xl" className={classes.container}>
				<Grid container justify="center">
					<Typography variant="h5">
						{t("home.learn.title")}
					</Typography>
					<Grid item >

					</Grid>
				</Grid>
			</Container>

		</React.Fragment>
	);
};
