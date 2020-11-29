import React from "react";
import { HelmetMain } from "common";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";
import { Container, CssBaseline } from "@material-ui/core";
import useStyles from "../style";

export const LearnForums = () => {
	initializeGA();
	pageViewGA({ path: window.location.pathname + window.location.search });
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<HelmetMain title={t("dashboard.helmet.learn")} />
			<Container maxWidth="xl" className={classes.container}>
				
			</Container>

		</React.Fragment>
	);
};
