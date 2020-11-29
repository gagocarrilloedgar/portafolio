import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { CookiesPolicy } from "common";

import { BHome, BDashboardBar, BDrawer, Layout, Main } from "./Components";
import { getJWT, localSDB } from "utils";
import { useContext } from "react";
import { OpenContext } from "hooks";


export const BDashboard = () => {
    const { setMain } = useContext(OpenContext);

    useEffect(() => {
        if (!getJWT(localSDB.token)) {
            window.location = "/";
        }
        if (!getJWT(localSDB.firsttime)) {
            setMain(true);
        }
    }, []);

    return (
        <React.Fragment>
            <Layout>
                <BDashboardBar />
                <BDrawer />
                <Main>
                    <Switch>
                        {/*<Route path="/business/user" component={Profile} />
                        <Route path="/business/results" component={Results} />*/}
                        <Route path="/business" component={BHome} />
                    </Switch>
                </Main>
            </Layout>
            <CookiesPolicy />
        </React.Fragment>
    );
};