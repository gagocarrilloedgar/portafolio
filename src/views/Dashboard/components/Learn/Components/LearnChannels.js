import React, { useContext, useEffect } from "react";
import { HelmetMain } from "common";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";
import { ResourcesContext } from "hooks"
import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import useStyles from "../style";
import ResourcesTable from "./ResourcesTable";

export const LearnChannels = () => {

	initializeGA();

	pageViewGA({ path: window.location.pathname + window.location.search });
	const { resources, fetchResourcesByPPType } = useContext(ResourcesContext);
	const PPTYPE = "youtube";

	useEffect(() => {
		fetchResourcesByPPType(PPTYPE);
	}, [])

	console.log(resources);

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
					<ResourcesTable data={resources} />
				</Grid>
			</Container>
		</React.Fragment>
	);
};
