import React from "react";
import { HelmetMain } from "common";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";
import {
	Container, CssBaseline, Grid, Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper
} from "@material-ui/core";
import useStyles from "../style";

export const LearnDocs = () => {
	initializeGA();
	pageViewGA({ path: window.location.pathname + window.location.search });
	const { t } = useTranslation();
	const classes = useStyles();

	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3),
		createData('Gingerbread', 356, 16.0, 49, 3.9),
	];


	return (
		<React.Fragment>
			<CssBaseline />
			<HelmetMain title={t("dashboard.helmet.learn")} />
			<Container maxWidth="lg" className={classes.container}>
				<Grid container justify="center">
					<Typography variant="h5">
						{t("home.learn.title")}
					</Typography>
					<Grid item lg={12} sm={12} xs={12}>
						<TableContainer component={Paper}>
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Dessert (100g serving)</TableCell>
										<TableCell align="right">Calories</TableCell>
										<TableCell align="right">Fat&nbsp;(g)</TableCell>
										<TableCell align="right">Carbs&nbsp;(g)</TableCell>
										<TableCell align="right">Protein&nbsp;(g)</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<TableRow key={row.name}>
											<TableCell component="th" scope="row">
												{row.name}
											</TableCell>
											<TableCell align="right">{row.calories}</TableCell>
											<TableCell align="right">{row.fat}</TableCell>
											<TableCell align="right">{row.carbs}</TableCell>
											<TableCell align="right">{row.protein}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</Container>

		</React.Fragment>
	);
};
