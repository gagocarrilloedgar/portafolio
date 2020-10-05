import React from "react";
import { Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { BusinessBar } from "./Components";
import { HelmetMain } from "common";

export const Business = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <HelmetMain title={t("business.helmet.title")} />
            <BusinessBar />
            <Switch>
                {/*<Route path="/business/register" component={Register} />
                <Route path="/business/login" component={Login} />
    */}
            </Switch>
        </React.Fragment>
    );
};

 
