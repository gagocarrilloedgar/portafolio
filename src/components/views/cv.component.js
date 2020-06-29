import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { ProjectContext } from "../../providers/project.provider";
import { CollapseCardTest } from "./viewCard.component";
import { CollapseTextCard } from "./textCard.component";
import ExperienceTimeline from "./experience.component";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "45%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function ProjectsGrid({ userId }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const values = useContext(ProjectContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    values.fethProjectsData(userId);
  }, [userId]);

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
        >
          <Tab
            label="Portfolio"
            {...a11yProps(0)}
            style={{ fontSize: "12px" }}
          />
          <Tab
            label="Experiencia"
            {...a11yProps(1)}
            style={{ fontSize: "12px" }}
          />
          <Tab
            label="Estudios"
            {...a11yProps(2)}
            style={{ fontSize: "12px" }}
          />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} color="primary">
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {values.projects.length < 1 ? (
              <Grid container>
                <div></div>
                <h1>Todavía no hay proyectos</h1>
              </Grid>
            ) : (
              values.projects.map((card, index) => (
                <Grid item key={card._id} xs={12} sm={6} md={4}>
                  <CollapseCardTest card={card} key={card._id} />
                </Grid>
              ))
            )}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExperienceTimeline />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
