import React,{ useContext, useEffect } from "react";
import { HelmetMain } from "common";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";
import ResourcesTable from "./ResourcesTable";
import { ResourcesContext } from "hooks"
import { window } from "utils";

import {
	Container, CssBaseline, Grid, Typography
} from "@material-ui/core";
import useStyles from "../style";

export const LearnDocs = () => {
	initializeGA();
	pageViewGA({ path: window.location.pathname + window.location.search });
	const { t } = useTranslation();
	const classes = useStyles();
	const { resources, fetchResourcesByPPType } = useContext(ResourcesContext);
	const PPTYPE = "docs";

	useEffect(() => {
		fetchResourcesByPPType(PPTYPE);
	}, [])

	return (
		<React.Fragment>
			<CssBaseline />
			<HelmetMain title={t("dashboard.helmet.learn")} />
			<Container maxWidth="lg" className={classes.container}>
				<Grid container justify="center">
					<Typography variant="h5">
						{"Documentación oficial de cada lenguage o framework"}
					</Typography>
					<ResourcesTable data={resources} />
				</Grid>
			</Container>

		</React.Fragment>
	);
};
