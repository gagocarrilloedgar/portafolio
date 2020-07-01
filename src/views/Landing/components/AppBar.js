import React, { useContext } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  Input,
  Icon,
  InputAdornment,
  TextField,
  Paper,
  InputBase,
  Card,
} from "@material-ui/core/";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import ContactButton from "../../Main view/contact";
import Search from "@material-ui/icons/SearchOutlined";
import { ProjectContext } from "../../../providers/project.provider";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  buttonStyle: {
    fontSize: "11px",
  },
}));

const AppBarIndex = () => {
  const classes = useStyles();
  const projectProvider = useContext(ProjectContext);
  const [tag, setTag] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    projectProvider.getProjectByTag(tag);
  };

  return (
    <AppBar
      elevation={2}
      style={{ backgroundColor: "white", width: "100%", display: "flex" }}
    >
      <Toolbar>
        <Grid container>
          <Link to="" style={{ textDecoration: "none" }}>
            <Button small className={classes.buttonStyle}>
              <img width="23" src={logo} alt="logo" />
              ortfolio
            </Button>
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button small className={classes.buttonStyle}>
              Iniciar sesión
            </Button>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button small className={classes.buttonStyle}>
              Registro
            </Button>
          </Link>
          <ContactButton />
          <Grid item xs={5}></Grid>
          <Paper
            variant="outlined"
            fullWidth
            style={{
              width: "500px",
              height: "100%",
              justifySelf: "left",
              marginBottom: "5px",
            }}
          >
            <form onSubmit={onSubmit}>
              <InputBase
                fullWidth
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="Palabra clave de los proyectos que te interesen"
                style={{
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  fontFamily: `"Montserrat",sans-serif`,
                  fontSize: "15px",
                }}
                endAdornment={<Search />}
              />
            </form>
          </Paper>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarIndex;
