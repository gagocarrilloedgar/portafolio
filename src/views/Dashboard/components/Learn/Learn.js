import React from "react";
import { HelmetMain } from "common";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";
import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";
import { Route, Switch } from "react-router-dom";
import {
	LearnChannels,
	LearnDocs,
	LearnWebs,
	LearnForums,
	LearnMain
} from "./Components";

export const Learn = () => {
	initializeGA();
	pageViewGA({ path: window.location.pathname + window.location.search });
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<HelmetMain title={t("dashboard.helmet.learn")} />
			<Switch>
				<Route path="/app/learn/channels" component={LearnChannels} />
				<Route path="/app/learn/docs" component={LearnDocs} />
				<Route path="/app/learn/webs" component={LearnWebs} />
				<Route path="/app/learn/forums" component={LearnForums} />
				<Route path="/app/learn" component={LearnMain} />
			</Switch>
		</React.Fragment>
	);
};

export default Learn;
