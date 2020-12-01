import React, { createContext, useState } from 'react'
import axios from "axios";
import { routerMain, capitalLetters } from 'utils';

export const ResourcesContext = createContext([]);


export const ResourcesContextProvider = (props) => {

    const [resources, setResources] = useState([]);
    const { WordComb } = capitalLetters();

    const fetchResources = () => {
        axios
            .get(routerMain.resourcesRouter.findAll)
            .then((res) => {
                setResources(res.data);
                //setJWT(localStorageDB.projects, res.data);
            })
            .catch((err) => console.log(err));
    }

    const fetchResourcesByGroup = (group) => axios
        .get(routerMain.resourcesRouter.getResourceByGroup + group)
        .then((res) => {
            setResources(res.data);
            //setJWT(localStorageDB.projects, res.data);
        })
        .catch((err) => console.log(err));


    const fetchResourcesByPPType = (PPType) => axios
        .get(routerMain.resourcesRouter.getResourceByPPType + PPType)
        .then(res => {
            setResources(res.data);
        })
        .catch((err) => console.log(err));

    const fetchResourcesByTags = (tag) => {
        const tags = WordComb(tag);

        axios
            .post(routerMain.resourcesRouter.getResourcesByTag, { tags })
            .then(res => {
                setResources(res);
                //window.location= "";
            })
            .catch(err => console.log(err));
    }

    const fetchResourcesByLang = (Lang) =>
        axios
            .get(routerMain.resourcesRouter.fetchResourcesByLang + Lang)
            .then(res => {
                setResources(res.data);
            })
            .catch((err) => console.log(err));



    return (
        <ResourcesContext.Provider
            value={{
                resources,
                setResources,
                fetchResources,
                fetchResourcesByGroup,
                fetchResourcesByPPType,
                fetchResourcesByTags,
                fetchResourcesByLang
            }}>
            {props.children}
        </ResourcesContext.Provider>
    )
}
