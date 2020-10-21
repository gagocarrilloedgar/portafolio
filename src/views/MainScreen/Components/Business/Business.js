import React from "react";
import { Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { BusinessBar } from "./Components";
import { CookiesPolicy, HelmetMain } from "common";
import "./style.css";
import { HeroComponent } from "./Components";

export const Business = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <HelmetMain title={t("business.helmet.title")} />
            <BusinessBar />
            <Switch>
                <Route path="/index/business" component={HeroComponent} />
            </Switch>
            <CookiesPolicy />
        </React.Fragment>
    );
};


