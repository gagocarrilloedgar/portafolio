import React, { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { getJWT, setJWT, localStorageDB } from "./helpers/jwt";
import { UserContext } from "./user.provider";
import { routerMain } from "../providers/routes/router";
import axios from "axios";
import { indigo } from "@material-ui/core/colors";

export const ProjectContext = createContext([]);

export const ProjectProviderContext = (props) => {
  const [projects, setProjects] = useState([]);
  const values = useContext(UserContext);
  const [singleProject, setSingleProject] = useState({});

  const [toAdd, setToAdd] = useState({
    userId: "",
    title: "",
    description: "",
    urlimage: "",
    projecturl: "",
    tags: [],
  });

  useEffect(() => {
    if (getJWT(localStorageDB.user) === null) {
      console.log("no user");
    } else {
      if (!getJWT(localStorageDB.projects)) {
        getUserProjects();
      } else {
        setProjects(getJWT(localStorageDB.projects));
      }
    }
  }, []);

  const getUserProjects = () => {
    const user = getJWT(localStorageDB.user);
    console.log("hola:" + user);
    axios
      .get(routerMain.projectRouter.findProjectByUserId + user._id)
      .then((res) => {
        setProjects(res.data);
        setJWT(localStorageDB.projects, res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //User Only for the Live version so the client doesn't use their localStorage
  const fethProjectsData = (id) => {
    axios
      .get(routerMain.projectRouter.findProjectByUserId + id)
      .then((res) => {
        setProjects(res.data);
        //setJWT(localStorageDB.projects, res.data);
      })
      .catch((err) => console.log(err));
  };

  const getProjectByUserId = () => {
    axios
      .get(routerMain.projectRouter.findProject + projects._id)
      .then((res) => {
        setSingleProject(res.data);
        console.log("Project found:" + res.data);
      });
  };

  const addProject = () => {
    const objt = toAdd;
    objt.userId = values.user._id;

    axios
      .post(routerMain.projectRouter.addProject, objt)
      .then((res) => {
        setJWT(localStorageDB.projects, [...projects, res.data]);
        setProjects([...projects, res.data]);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (prop) => (event) => {
    setToAdd({
      ...toAdd,
      [prop]: event.target.value,
    });
    console.log(toAdd);
  };

  const updateFoundProject = (card, index) => {
    console.log(card);
    if (toAdd.title !== "") {
      card.title = toAdd.title;
    }
    if (toAdd.description !== "") {
      card.description = toAdd.description;
    }
    if (toAdd.urlimage !== "") {
      card.urlimage = toAdd.urlimage;
    }
    if (toAdd.projecturl !== "") {
      card.projecturl = toAdd.projecturl;
    }
    if (toAdd !== []) {
      card.tags = toAdd.tags;
    }

    let newArr = [...projects];
    newArr[index] = card;
    newArr.userId = values.user._id;

    setProjects(newArr);
    setJWT(localStorageDB.projects, newArr);
    const updateURL = routerMain.projectRouter.uptadeProject + card._id;

    axios
      .post(updateURL, card)
      .then((res) => console.log("Updated Successfully"))
      .catch((err) => console.log(err));

    setToAdd({
      userId: "",
      title: "",
      description: "",
      urlimage: "",
      projecturl: "",
      tags: [],
    });
  };

  const saveProject = () => {
    setProjects([...projects, toAdd]);
    setJWT(localStorageDB, [...projects, toAdd]);
  };

  const deleteProjectById = (id) => {
    console.log(id);
    let newArray = projects.filter((e) => e._id !== id);

    setJWT(localStorageDB.projects, newArray);
    setProjects(newArray);
    axios
      .delete(routerMain.projectRouter.deleteProject + id)
      .then((resp) => resp.json())
      .then((res) => {
        console.log("Project successfully deleted");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  console.log(toAdd);

  const projectProvider = {
    projects,
    setProjects,
    saveProject,
    handleChange,
    updateFoundProject,
    addProject,
    getUserProjects,
    getProjectByUserId,
    fethProjectsData,
    deleteProjectById,
    setToAdd,
    toAdd,
  };
  return (
    <ProjectContext.Provider value={projectProvider}>
      {props.children}
    </ProjectContext.Provider>
  );
};
