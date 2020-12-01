import React, { useContext, useEffect } from "react";
import { HelmetMain } from "common";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";
import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import useStyles from "../style";
import ResourcesTable from "./ResourcesTable";
import { ResourcesContext } from "hooks"

export const LearnForums = () => {
	initializeGA();
	pageViewGA({ path: window.location.pathname + window.location.search });
	const { t } = useTranslation();
	const classes = useStyles();

	const { resources, fetchResourcesByPPType } = useContext(ResourcesContext);
	const PPTYPE = "forums";

	useEffect(() => {
		fetchResourcesByPPType(PPTYPE);
	}, [])



	return (
		<React.Fragment>
			<CssBaseline />
			<HelmetMain title={t("dashboard.helmet.learn")} />
			<Container maxWidth="xl" className={classes.container}>
				<Grid container justify="center">
					<Typography variant="h5">
						{"Foros destacados y especializados"}
					</Typography>
					<ResourcesTable data={resources} />
				</Grid>
			</Container>
		</React.Fragment>
	);
};
