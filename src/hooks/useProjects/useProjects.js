import React from "react";
import { useState, useEffect, createContext, useContext } from "react";
import { getJWT, localSDB, setJWT, routerMain, capitalLetters } from "utils";
import axios from "axios";
import { UserContext } from "hooks";

export const ProjectContext = createContext([]);

export const ProjectContextProvider = (props) => {
  const [projects, setProjects] = useState([]);
  const [singleProject, setSingleProject] = useState({});
  const { user } = useContext(UserContext);
  const { WordComb } = capitalLetters();
  const [toAdd, setToAdd] = useState({
    userId: "",
    title: "",
    description: "",
    urlimage: "",
    projecturl: "",
    tags: [],
  });

  useEffect(() => {
    if (getJWT(localSDB.user) === null) {
      console.log("no user");
    } else {
      if (!getJWT(localSDB.projects)) {
        getUserProjects();
      } else {
        setProjects(getJWT(localSDB.projects));
      }
    }
  }, []);

  const getTags = () => {
    const tagArray = [].concat
      .apply(
        [],
        projects.map((project) => project.tags)
      )
      .filter((val, id, array) => array.indexOf(val) === id);
    return tagArray;
  };

  const getUserProjects = () => {
    const user = getJWT(localSDB.user);
    console.log("hola:" + user);
    if (user != null) {
      axios
        .get(routerMain.projectRouter.findProjectByUserId + user._id)
        .then((res) => {
          setProjects(res.data);
          setJWT(localSDB.projects, res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
    objt.userId = user._id;

    axios
      .post(routerMain.projectRouter.addProject, objt)
      .then((res) => {
        setJWT(localSDB.projects, [...projects, res.data]);
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
    newArr.userId = user._id;

    setProjects(newArr);
    setJWT(localSDB.projects, newArr);
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
    setJWT(localSDB.projects, [...projects, toAdd]);
  };

  const deleteProjectById = (id) => {
    console.log(id);
    let newArray = projects.filter((e) => e._id !== id);

    setJWT(localSDB.projects, newArray);
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

  const getProjectByTag = async (tag) => {
    const tags = WordComb(tag);

    await axios
      .post(routerMain.projectRouter.getProjectsByTag, { tags })
      .then((projectsByTag) => {
        setJWT(localSDB.pTags, projectsByTag.data);
        window.location = "/index/tags";
      });
  };

  return (
    <ProjectContext.Provider
      value={{
        getTags,
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
        getProjectByTag,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
