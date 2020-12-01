import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FormControl, InputLabel, Select, TablePagination } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '90%',
    },
    table: {
        minWidth: 650,
    },
});


const headers = [
    "Título",
    "Enlace",
    "Especialidad",
    "Idioma",
    "Tags",
]


const ResourcesTable = ({ data }) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [filtered, setFiltered] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        setFiltered(data);
    }, [data])

    const handleFilter = (event) => {
        const filter = event.target.value;
        setFiltered([]);
        data.map(ress => {
            if (ress.language === filter || ress.group === filter) {
                return setFiltered(prev => [...prev, ress]);
            }
            else if (filter === "") {
                return setFiltered(prev => [...prev, ress])
            } else {
                return console.log("err")
            }
        });
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {headers.map((key) => {
                                if (key === "Idioma") {
                                    return (
                                        <TableCell align="center">
                                            <FormControl margin="dense" variant="outlined" >
                                                <InputLabel htmlFor="outlined-idioma-native-simple">Idioma</InputLabel>
                                                <Select
                                                    native
                                                    onChange={handleFilter}
                                                    inputProps={{
                                                        name: 'idioma',
                                                        id: 'outlined-idioma-native-simple',
                                                    }}
                                                    label="Idioma"
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="Inglés">Inglés</option>
                                                    <option value="Español">Español</option>
                                                </Select>
                                            </FormControl>
                                        </TableCell>
                                    )
                                } else if (key === "Especialidad") {
                                    return (<TableCell>
                                        <FormControl margin="dense" variant="outlined" >
                                            <InputLabel htmlFor="outlined-especialidad-native-simple">Especialdiad</InputLabel>
                                            <Select
                                                native
                                                onChange={handleFilter}
                                                inputProps={{
                                                    name: 'especialidad',
                                                    id: 'outlined-especialidad-native-simple',
                                                }}
                                                label="Especialidad"
                                            >
                                                <option aria-label="None" value="" />
                                                <option value="Inglés"> Data Science</option>
                                                <option value="Front-end"> Front-end </option>
                                                <option value="Back-end"> Back-end </option>
                                                <option value="Diseño"> Diseño </option>
                                                <option value="Desarrollo web"> Desarrollo web </option>
                                                <option value="Programación funcional"> Programación funcional </option>
                                                <option value="SEO/SEM"> SEO/SEM </option>

                                            </Select>
                                        </FormControl>
                                    </TableCell>)
                                }
                                return <TableCell align="center" style={{ fontWeight: 600 }}> {key} </TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover key={row._id} tabIndex={-1}>
                                    <TableCell component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                    <TableCell > <a href={row.url}>{row.url}</a></TableCell>
                                    <TableCell align="center"> {row.group} </TableCell>
                                    <TableCell align="center"> {row.language}</TableCell>
                                    <TableCell > {row.tags.map(key => { return key + "," })}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, 30]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default ResourcesTable